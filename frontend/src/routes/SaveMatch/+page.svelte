<script>
    const positions = ["Top", "Jungle", "Mid", "Support", "ADC"];

    let victoryTeam = "";

    $: purpleClass = victoryTeam === '0' ? 'purple-victory' : '';
    $: redClass = victoryTeam === '1' ? 'red-victory' : '';

    let teamPurple = positions.map(position => ({
        teamColor: "Purple",
        nickname: "",
        summonerName: "",
        champion: "",
        position: position,
        kills: 0,
        deaths: 0,
        assists: 0,
    }));

    let teamRed = positions.map(position => ({
        teamColor: "Red",
        nickname: "",
        summonerName: "",
        champion: "",
        position: position,
        kills: 0,
        deaths: 0,
        assists: 0,
    }));

    const isFormValid = () => {
        if (!victoryTeam) return false;
        const allPlayers = [...teamPurple, ...teamRed];
        return allPlayers.every(player =>
            player.nickname && player.summonerName && player.champion &&
            player.kills !== undefined && player.deaths !== undefined && player.assists !== undefined
        );
    };

    function saveMatchInfo() {
        if (!isFormValid()) {
            alert("모든 필드를 올바르게 입력해주세요.");
            return;
        }
        const currentDate = new Date().toISOString().split('T')[0];
        const updatedTeamPurple = teamPurple.map(player => ({
            ...player,
            winning: victoryTeam === '0' ? 1 : 0,
        }));
        const updatedTeamRed = teamRed.map(player => ({
            ...player,
            winning: victoryTeam === '1' ? 1 : 0,
        }));
        const matchData = {
            date: currentDate,
            teams: [...updatedTeamPurple, ...updatedTeamRed]
        };

        console.log(JSON.stringify(matchData, null, 2));

        fetch('/api/saveMatches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData),
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
    }

</script>

<form on:submit|preventDefault={saveMatchInfo}>
    <div class="team-container {victoryTeam === '0' ? 'purple-victory' : victoryTeam === '1' ? 'red-victory' : ''}">
        <div class="team team-purple {victoryTeam === '0' ? 'selected-team' : 'not-selected-team'}">
            <h2>퍼플 팀</h2>
            {#each teamPurple as player, index}
                <div class="player-entry">
                    <input type="text" bind:value={player.nickname} placeholder="닉네임"/>
                    <input type="text" bind:value={player.summonerName} placeholder="이름"/>
                    <input type="text" bind:value={player.champion} placeholder="챔피언"/>
                    <input type="number" bind:value={player.kills} placeholder="킬" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.deaths} placeholder="데스" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.assists} placeholder="어시스트" class="kills-deaths-assists"/>
                </div>
            {/each}
        </div>

        <div class="team team-red {victoryTeam === '1' ? 'selected-team' : 'not-selected-team'}">
            <h2>레드 팀</h2>
            {#each teamRed as player, index}
                <div class="player-entry">
                    <input type="text" bind:value={player.nickname} placeholder="닉네임"/>
                    <input type="text" bind:value={player.summonerName} placeholder="이름"/>
                    <input type="text" bind:value={player.champion} placeholder="챔피언"/>
                    <input type="number" bind:value={player.kills} placeholder="킬" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.deaths} placeholder="데스" class="kills-deaths-assists"/>
                    <input type="number" bind:value={player.assists} placeholder="어시스트" class="kills-deaths-assists"/>
                </div>
            {/each}
        </div>
    </div>
    <div class="victory-selection">
        <input bind:group={victoryTeam} id="teamPurpleWin" type="radio" value="0">
        <label for="teamPurpleWin">퍼플 팀 승리</label>

        <input bind:group={victoryTeam} id="teamRedWin" type="radio" value="1">
        <label for="teamRedWin">레드 팀 승리</label>
    </div>
    <button type="submit">매치 정보 저장</button>
</form>

<style>

    .team-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }


    .team {
        flex: 1;
        padding: 20px;
        margin: 0 10px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
    }

    .player-entry {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }

    input[type="text"], input[type="number"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 0 5px;
    }

    .kills-deaths-assists {
        width: 60px;
    }

    button {
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #45a049;
    }

    .victory-selection {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
    }

    .victory-selection input[type="radio"] {
        opacity: 0;
        position: absolute;
    }

    .victory-selection label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .victory-selection label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: #ddd;
        border: 2px solid #555;
    }

    .selected-team {
        background-color: deepskyblue;
    }

    .not-selected-team {
        background-color: lightpink;
    }

    .purple-victory {
        background-color: deepskyblue;
    }

    .red-victory {
        background-color: lightpink;
    }

    .victory-selection input[type="radio"]:checked + label::before {
        background-color: #800080;
    }

    .victory-selection input[type="radio"]:checked:not(#teamPurpleWin) + label::before {
        background-color: #FF0000;
    }

</style>
