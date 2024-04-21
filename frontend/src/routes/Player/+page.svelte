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

	function handleModalSearch(type, clicked) {
		closeModal();
		console.log('모달서치 진입');
		searchType = type;
		keyword = clicked;
		searchKeyword();
	}


	async function fetchMatchDetails(matchCode) {
		const response = await fetch(`/api/targetMatch?matchCode=` + matchCode);
		const data = await response.json();

		if (!data || !Array.isArray(data)) {
			console.error('응답 데이터가 유효하지 않습니다:', data);
			matches.set({ teamPurple: [], teamRed: [], winningTeam: '' });
			return;
		}

		const teamPurple = data.filter(player => player.teamColor === 'Purple');
		const teamRed = data.filter(player => player.teamColor === 'Red');
		const winningTeam = teamPurple.some(player => player.winning === 1) ? 'Purple' : 'Red';

		matches.set({ teamPurple, teamRed, winningTeam });

		console.log('API 응답 데이터:', matches);
		console.log(matches.teamRed);
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

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<div class="setBackground">

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
				<td>게임 횟수</td>
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
		<div class="modal-overlay" role="button" tabindex="0" on:click={closeModal} on:keydown={handleKeydown}>
			<div class="modal-content" on:click|stopPropagation tabindex="-1">
				<div class="team-display">
					<div class="team-section">
						<h3 class="team-title team-purple">퍼플 팀 {$matches.winningTeam === 'Purple' ? '(승리)' : ''}</h3>
						<table>
							<thead>
							<tr>
								<th>닉네임</th>
								<th>이름</th>
								<th>챔피언</th>
								<th>KDA</th>
							</tr>
							</thead>
							<tbody>
							{#each $matches.teamPurple as player (player.id)}
								<tr class={player.winning ? 'win' : 'lose'}>
									<td title="{player.nickname}" on:click={() => handleModalSearch('nickname', player.nickname)}>{player.nickname}</td>
									<td on:click={() => handleModalSearch('name', player.summonerName)}>{player.summonerName}</td>
									<td>{player.champion}</td>
									<td>{player.kills}/{player.deaths}/{player.assists}</td>
								</tr>
							{/each}
							</tbody>
						</table>
					</div>
					<div class="team-section">
						<h3 class="team-title team-red">레드 팀 {$matches.winningTeam === 'Red' ? '(승리)' : ''}</h3>
						<table>
							<thead>
							<tr>
								<th>닉네임</th>
								<th>이름</th>
								<th>챔피언</th>
								<th>KDA</th>
							</tr>
							</thead>
							<tbody>
							{#each $matches.teamRed as player (player.id)}
								<tr class={player.winning ? 'win' : 'lose'}>
									<td title="{player.nickname}" on:click={() => handleModalSearch('nickname', player.nickname)}>{player.nickname}</td>
									<td on:click={() => handleModalSearch('name', player.summonerName)}>{player.summonerName}</td>
									<td>{player.champion}</td>
									<td>{player.kills}/{player.deaths}/{player.assists}</td>
								</tr>
							{/each}
							</tbody>
						</table>
					</div>
				</div>
				<button on:click={closeModal}>Close</button>
			</div>
		</div>
	{/if}
</div>




<style>
    .main_container {
		width: 100%;
        overflow-x: auto;
        overflow-y: auto;
    }


    table {
		width: 100%;
		table-layout: fixed;
        border-collapse: collapse;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

	th, td {
		border: 1px solid #ddd;
		padding: 12px 8px;
		text-align: center;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		max-width: 150px;
	}

	th {
		background-color: #f2f2f2;
		color: #333;
		font-weight: bold;
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

	input[type="text"]{
		width: 50%;
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
		cursor: pointer;
    }

	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 4px;
		max-width: 800px;
		max-height: 90%;
		width: 90%;
		overflow-y: auto;
		position: relative;
		outline: none;
	}


	.team-display {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.team-section {
		width: 45%;
		margin: 0 2.5%;
	}

	.team-title {
		text-align: center;
		margin-bottom: 10px;
	}

	.team-purple .team-title {
		color: deepskyblue;
	}

	.team-red .team-title {
		color: red;
	}

	@media (max-width: 1024px) {
		.modal-content, .team-display {
			flex-direction: column;
		}

		.team-section {
			width: 100%;
			margin: 0;
		}

		.modal-content {
			width: 95%;
			padding: 15px;
		}

		th, td {
			padding: 8px 4px;
			font-size: 0.8rem;
		}
	}

	@media (max-width: 600px) {
		.modal-content {
			width: 100%;
			padding: 10px;
			border-radius: 0;
		}

		.team-title {
			font-size: 1em;
		}

		th, td {
			font-size: 0.7rem;
		}
	}

</style>

