<script>
	import { selectedMatchCode } from './MatchCode.js';
	import { writable } from 'svelte/store';
	import { matchDetails } from './matchDetails.js';

	let showModal = writable(false);
	let searchType = 'nickname';
	let keyword = '';
	let lists = [];
	let mostChampion;
	let playedGames;
	let winningPercentage;
	let matches = writable({
		teamPurple: [],
		teamRed: [],
		winningTeam: ''
	});


	let matchDetailsData = [];

	matchDetails.subscribe(value => {
		matchDetailsData = value;
	});

	function handleMatchClick(matchCode) {
		selectedMatchCode.set(matchCode);
		fetchMatchDetails(matchCode);
		console.log('showModal 상태:', $showModal);
	}


	async function fetchMatchDetails(matchCode) {
		const response = await fetch(`/api/targetMatch?matchCode=` + matchCode);
		const data = await response.json();

		if (!data || !Array.isArray(data)) {
			console.error('응답 데이터가 유효하지 않습니다:', data);
			matches.set([]);
			return;
		}
		const teamPurple = data.filter(player => player.teamColor === 'Purple');
		const teamRed = data.filter(player => player.teamColor === 'Red');
		const winningTeam = teamPurple.some(player => player.winning === 1) ? 'Purple' : 'Red';

		matches.set({ teamPurple, teamRed, winningTeam });

		console.log('API 응답 데이터:', matches);
		console.log(matches.teamRed);
		matches.set(data);
		showModal.set(true);
	}


	function closeModal() {
		showModal.set(false);
	}

	function searchKeyword() {
		if (searchType === '') {
			alert('검색어를 입력하세요');
			return;
		}

		fetch(`/api/search?value=${searchType}&keyword=${keyword}`, {
			method: 'GET'
		})
			.then(response => response.json())
			.then(data => {
				if (data === null) {
					alert('검색 결과가 없습니다.');
				}

				lists = data.list || [];
				mostChampion = data.gameDataProjection.mostChampion;
				playedGames = data.gameDataProjection.playedGames;
				winningPercentage = data.gameDataProjection.winningPercentage;
			})
			.catch(error => {
				console.error('검색 중 오류 발생:', error);
			});
	}

	function handleKeyUp(event) {
		if (event.key === 'Enter') {
			searchKeyword();
		}
	}
</script>


<select bind:value={searchType}>
	<option value="nickname">닉네임</option>
	<option value="name">이름</option>
</select>
<input bind:value={keyword} on:keyup={handleKeyUp} type="text" />
<button on:click={searchKeyword}>검색</button>

<div class="main_container">
	<table>
		<thead>
		<tr>
			<td>모스트 챔피언</td>
			<td>게임횟수</td>
			<td>승률</td>
		</tr>
		</thead>
		<tbody>
		{#if lists.length > 0}
			<tr>
				<td>{mostChampion}</td>
				<td>{playedGames}</td>
				<td>{winningPercentage}%</td>
			</tr>
		{:else}
			<tr>
				<td colspan="3">정보가 없습니다.</td>
			</tr>
		{/if}
		</tbody>
	</table>

	<table>
		<thead>
		<tr>
			<th>날짜</th>
			<th>챔피언</th>
			<th>포지션</th>
			<th>킬</th>
			<th>데스</th>
			<th>어시스트</th>
		</tr>
		</thead>
		<tbody>
		{#if lists.length > 0}
			{#each lists as list}
				<tr class:win={list.winning === 1} class:lose={list.winning === 0}>
					<td>{list.date}</td>
					<td on:click={() => handleMatchClick(list.matchCode)}>{list.champion}</td>
					<td>{list.position}</td>
					<td>{list.kills}</td>
					<td>{list.deaths}</td>
					<td>{list.assists}</td>
				</tr>
			{/each}
		{:else}
			<tr>
				<td colspan="6">정보가 없습니다.</td>
			</tr>
		{/if}
	</table>
</div>


{#if $showModal}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<table>
				<thead>
				<tr>
					<th class="team-purple nickname" colspan="4">퍼플 팀 {$matches.winningTeam === 'Purple' ? '(승리)' : ''}</th>
					<th class="team-red nickname" colspan="4">레드 팀 {$matches.winningTeam === 'Red' ? '(승리)' : ''}</th>
				</tr>
				<tr>
					<th class="nickname">닉네임</th>
					<th class="summonerName">이름</th>
					<th class="champion">챔피언</th>
					<th class="kda">KDA</th>
					<th class="nickname">닉네임</th>
					<th class="summonerName">이름</th>
					<th class="champion">챔피언</th>
					<th class="kda">KDA</th>
				</tr>
				</thead>
				<tbody>
				{#if $matches.length > 0}
					{#each $matches as match (match.id)}
					<tr>
						<td class={match.winning ? 'victory' : 'defeat'}>{match.nickname}</td>
						<td class={match.winning ? 'victory' : 'defeat'}>{match.summonerName}</td>
						<td class={match.winning ? 'victory' : 'defeat'}>{match.champion}</td>
						<td class={match.winning ? 'victory' : 'defeat'}>{match.kills}/{match.deaths}/{match.assists}</td>
						{#if matches.teamRed && matches.teamRed[index]}
							<td class={matches.teamRed[index].winning ? 'victory' : 'defeat'}>{matches.teamRed[index].nickname}</td>
							<td class={matches.teamRed[index].winning ? 'victory' : 'defeat'}>{matches.teamRed[index].summonerName}</td>
							<td class={matches.teamRed[index].winning ? 'victory' : 'defeat'}>{matches.teamRed[index].champion}</td>
							<td class={matches.teamRed[index].winning ? 'victory' : 'defeat'}>{matches.teamRed[index].kills}/{matches.teamRed[index].deaths}/{matches.teamRed[index].assists}</td>
						{/if}
					</tr>
				{/each}
				{:else}
					<div>데이터가 없습니다.</div>
				{/if}
				</tbody>
			</table>
			<button on:click={closeModal}>Close</button>
		</div>
	</div>
{/if}


<style>
    .main_container {
        overflow-x: auto;
        overflow-y: auto;
    }


    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px 8px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    th {
        background-color: #f2f2f2;
        color: #333;
        font-weight: bold;
    }


    .win {
        background-color: #d4edda;
        color: #155724;
    }

    .lose {
        background-color: #f8d7da;
        color: #721c24;
    }

    input, select, button {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 4px;
        max-width: 500px;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
    }
</style>

