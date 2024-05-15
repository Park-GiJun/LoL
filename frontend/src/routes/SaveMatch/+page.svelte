<script>

    import {onMount} from "svelte";

    const positions = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

    let victoryTeam = '';

    let bannedPurple = Array(5).fill('');
    let bannedRed = Array(5).fill('');
    let showUserList = false;
    let showChampionList = false;


    $: purpleClass = victoryTeam === '0' ? 'team-won' : (victoryTeam === '1' ? 'team-lost' : 'default-background');
    $: redClass = victoryTeam === '1' ? 'team-won' : (victoryTeam === '0' ? 'team-lost' : 'default-background');

    let startX, startY, startLeft, startTop;

    function handleMoveDragStart(e) {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        startLeft = this.offsetLeft;
        startTop = this.offsetTop;
        document.addEventListener('mousemove', elementDrag.bind(this));
        document.addEventListener('mouseup', closeDragElement.bind(this));
        this.addEventListener('dragover', allowDrop);
        this.addEventListener('drop', handleMoveDrop);
    }

    function elementDrag(e) {
        e.preventDefault();
        const pos1 = startX - e.clientX;
        const pos2 = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;
        this.style.left = (startLeft - pos1) + 'px';
        this.style.top = (startTop - pos2) + 'px';
    }

    function closeDragElement() {
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
    }

    function handleMoveDrop(e) {
        e.preventDefault();
        // 여기에 드롭 후의 로직을 추가할 수 있습니다.
    }

    let teamPurple = positions.map(position => ({
        teamColor: 'Purple',
        nickname: '',
        summonerName: '',
        champion: '',
        position: position,
        kills: 0,
        deaths: 0,
        assists: 0,
        autoCompleteData: {}
    }));

    let teamRed = positions.map(position => ({
        teamColor: 'Red',
        nickname: '',
        summonerName: '',
        champion: '',
        position: position,
        kills: 0,
        deaths: 0,
        assists: 0,
        autoCompleteData: {}
    }));

    let userList = [];
    let champions = [];


    const isFormValid = () => {
        if (!victoryTeam) return false;
        const allPlayers = [...teamPurple, ...teamRed];
        return allPlayers.every(player =>
            player.nickname && player.summonerName && player.champion &&
            player.kills !== undefined && player.deaths !== undefined && player.assists !== undefined
        );
    };

    onMount(async () => {
        const response = await fetch('/api/getUser');
        userList = await response.json();
        console.log(userList);

        const responseChamp = await fetch('/api/champions');
        champions = await responseChamp.json();

        const userListContainer = document.querySelector('.user-list-container');
        const championListContainer = document.querySelector('.champion-list');
        userListContainer.addEventListener('mousedown', handleMoveDragStart.bind(userListContainer));
        championListContainer.addEventListener('mousedown', handleMoveDragStart.bind(championListContainer));
    })

    function handleDragStart(event, user) {
        event.dataTransfer.setData("application/json", JSON.stringify(user));
    }

    function handleDrop(event, playerIndex, team) {
        event.preventDefault();
        const data = event.dataTransfer.getData("application/json");
        const isChampion = data.includes('champion');

        if (isChampion) {
            const champion = JSON.parse(data);
            if (team === 'purple') {
                teamPurple[playerIndex] = {...teamPurple[playerIndex], champion: champion.champion};
            } else {
                teamRed[playerIndex] = {...teamRed[playerIndex], champion: champion.champion};
            }
        } else {
            const user = JSON.parse(data);
            if (team === 'purple') {
                teamPurple[playerIndex] = {
                    ...teamPurple[playerIndex],
                    nickname: user.nickName,
                    summonerName: user.summoner_Name
                };
            } else {
                teamRed[playerIndex] = {
                    ...teamRed[playerIndex],
                    nickname: user.nickName,
                    summonerName: user.summoner_Name
                };
            }
        }
    }


    function handleChampionDragStart(event, champion) {
        const championData = JSON.stringify({champion: champion, type: 'champion'});
        event.dataTransfer.setData("application/json", championData);
    }


    function handleChampionDrop(event, player) {
        event.preventDefault();
        const data = event.dataTransfer.getData("application/json");
        player.champion = JSON.parse(data);
    }

    function handleBanDrop(event, index, team) {
        event.preventDefault();
        const data = event.dataTransfer.getData("application/json");
        const {champion} = JSON.parse(data);
        if (team === 'purple') {
            bannedPurple[index] = champion;
        } else {
            bannedRed[index] = champion;
        }
    }


    function allowDrop(event) {
        event.preventDefault();
    }

    function toggleUserList() {
        showUserList = !showUserList;
    }

    function saveMatchInfo() {
        if (!isFormValid()) {
            alert('모든 필드를 올바르게 입력해주세요.');
            return;
        }
        const currentDate = new Date().toISOString().split('T')[0];
        const updatedTeamPurple = teamPurple.map(player => ({
            ...player,
            winning: victoryTeam === '0' ? 1 : 0
        }));
        const updatedTeamRed = teamRed.map(player => ({
            ...player,
            winning: victoryTeam === '1' ? 1 : 0
        }));
        const matchData = {
            date: currentDate,
            teams: [...updatedTeamPurple, ...updatedTeamRed],
            bans: {
                purple: bannedPurple,
                red: bannedRed
            }
        };

        console.log(JSON.stringify(matchData, null, 2));

        fetch('/api/saveMatches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(matchData)
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
    }

    let searchResults = [];

    function autoComplete(player, field, value) {
        if (value.length < 2) {
            player.autoCompleteData = {};
            return;
        }

        fetch(`/api/autoComplete?field=${field}&value=${value}`)
            .then(response => response.json())
            .then(data => {
                player.autoCompleteData = data;

                if (field === 'nickname') {
                    player.summonerName = data.summonerName;
                } else if (field === 'summonerName') {
                    player.nickname = data.nickname;
                }
            })
            .catch(error => console.error('Error:', error));
    }

    let championInput = '';
    let autoCompleteResults = [];
    let showDropdown = false;


    function selectChampion(championName) {
        championInput = championName;
        autoCompleteResults = [];
        showDropdown = false;
    }

    function swapTeamData() {
        const tempPurple = JSON.parse(JSON.stringify(teamPurple));
        const tempRed = JSON.parse(JSON.stringify(teamRed));
        teamPurple = tempRed;
        teamRed = tempPurple;
    }
</script>

<form on:submit|preventDefault={saveMatchInfo}>
    <div class="team-container {victoryTeam === '0' ? 'purple-victory' : victoryTeam === '1' ? 'red-victory' : ''}">
        <div class="team team-purple {purpleClass}">
            <h2>퍼플 팀</h2>
            {#each teamPurple as player, index}
                <div class="player-entry" on:drop|preventDefault={(event) => handleDrop(event, index, 'purple')}
                     on:dragover|preventDefault role="listitem" aria-dropeffect="move">
                    <input type="text" bind:value={player.nickname} placeholder="닉네임"
                           on:input={() => autoComplete(player, 'nickname', player.nickname)}/>
                    <input type="text" bind:value={player.summonerName} placeholder="이름"
                           on:input={() => autoComplete(player, 'summonerName', player.summonerName)}/>
                    <input type="text" bind:value={player.champion} placeholder="챔피언"/>
                    <input type="number" bind:value={player.kills} placeholder="킬" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.deaths} placeholder="데스" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.assists} placeholder="어시스트" class="kills-deaths-assists"/>
                </div>
            {/each}
            <div class="radio-container">
                <input bind:group={victoryTeam} class="radioSelect" id="teamPurpleWin" type="radio" value="0">
                <label for="teamPurpleWin">퍼플 팀 승리</label>
            </div>
            <div class="bans-section">
                <h3>퍼플 팀 밴</h3>
                {#each bannedPurple as banned, index}
                    <input type="text" bind:value={bannedPurple[index]}
                           on:drop|preventDefault={(event) => handleBanDrop(event, index, 'purple')}
                           on:dragover|preventDefault
                           placeholder="Banned Champion {index + 1}" class="ban-input"/>
                {/each}
            </div>
        </div>

        <div class="team team-red {redClass}">
            <h2>레드 팀</h2>
            {#each teamRed as player, index}
                <div class="player-entry" on:drop|preventDefault={(event) => handleDrop(event, index, 'red')}
                     on:dragover|preventDefault role="listitem" aria-dropeffect="move">
                    <input type="text" bind:value={player.nickname} placeholder="닉네임"
                           on:input={() => autoComplete(player, 'nickname', player.nickname)}/>
                    <input type="text" bind:value={player.summonerName} placeholder="이름"
                           on:input={() => autoComplete(player, 'summonerName', player.summonerName)}/>
                    <input type="text" bind:value={player.champion} placeholder="챔피언"/>
                    <input type="number" bind:value={player.kills} placeholder="킬" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.deaths} placeholder="데스" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.assists} placeholder="어시스트" class="kills-deaths-assists"/>
                </div>
            {/each}
            <div class="radio-container">
                <input bind:group={victoryTeam} class="radioSelect" id="teamRedWin" type="radio" value="1">
                <label for="teamRedWin">레드 팀 승리</label>
            </div>
            <div class="bans-section">
                <h3>레드 팀 밴</h3>
                {#each bannedRed as banned, index}
                    <input type="text" bind:value={bannedRed[index]}
                           on:drop|preventDefault={(event) => handleBanDrop(event, index, 'red')}
                           on:dragover|preventDefault
                           placeholder="Banned Champion {index + 1}" class="ban-input"/>
                {/each}
            </div>
        </div>
    </div>
    <button type="submit">매치 정보 저장</button>
</form>

<button on:click={toggleUserList}>
    {#if showUserList}
        유저 리스트 숨기기
    {:else}
        유저 리스트 보기
    {/if}
</button>

<button on:click={() => showChampionList = !showChampionList}>
    {#if showChampionList}챔피언 리스트 숨기기{:else}챔피언 리스트 보기{/if}
</button>

<button on:click={swapTeamData}>팀 데이터 교환</button>



{#if showUserList}
    <div class="user-list-container">
        <h2>유저</h2>
        <table>
            <thead>
            <tr>
                <th>닉네임</th>
                <th>이름</th>
            </tr>
            </thead>
            <tbody>
            {#each userList as user}
                <tr draggable="true" on:dragstart={(event) => handleDragStart(event, user)}>
                    <td>{user.nickName}</td>
                    <td>{user.summoner_Name}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
{/if}

{#if showChampionList}
    <ul class="champion-list">
        <li><h2>챔피언</h2></li>
        {#each champions as champion}
            <li draggable="true" on:dragstart={(event) => handleChampionDragStart(event, champion)}>
                {champion}
            </li>
        {/each}
    </ul>
{/if}

<style>
    .team-container {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        width: calc(75% - 10px);
    }

    .team {
        flex-grow: 1;
        padding: 20px;
        margin: 0 10px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .default-background {
        background-color: lightgrey;
    }

    .team-won, .team-lost {
        transition: background-color 0.5s ease;
    }

    .team-won {
        background-color: deepskyblue;
    }

    .team-lost {
        background-color: lightpink;
    }

    .player-entry {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    input[type="text"], input[type="number"] {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 0 5px;
    }

    .kills-deaths-assists {
        width: 60px;
    }

    .user-list-container, .champion-list {
        position: fixed;
        cursor: move;
    }

    button {
        width: calc(100% - 20px);
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
        font-size: 16px;
        margin: 10px;
    }

    .radio-container, .bans-section {
        padding: 10px;
        margin: 10px 0;
        background-color: #f0f0f0;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .user-list-container th, .user-list-container td, .champion-list li {
        text-align: center;
    }

    .user-list-container {
        left: 10px;
        top: 70%;
        transform: translateY(-50%);
        width: 20%;
        height: 50vh;
        overflow-y: auto;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 5;
    }

    .user-list-container table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        color: #333;
    }


    .user-list-container th, .user-list-container td {
        border-bottom: 1px solid #ccc;
        padding: 8px;
        cursor: pointer;
        text-align: left;
    }


    .user-list-container th {
        background-color: #f9f9f9;
        color: #333;
        font-weight: bold;
    }

    .user-list-container tbody tr:hover {
        background-color: #f1f1f1;
    }

    .champion-list {
        right: 10px;
        top: 70%;
        transform: translateY(-50%);
        width: 20%;
        height: 50vh;
        overflow-y: auto;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 5;
    }

    .champion-list li {
        padding: 8px;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .champion-list li:hover {
        background-color: #f0f0f0;
    }

    .swap-button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }


</style>

