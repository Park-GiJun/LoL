<script>
	let matchData = [];

	function sendMatchmakingRequest() {
		const positions = ['TOP', 'TOP', 'Jungle', 'Jungle', 'Mid', 'Mid', 'ADC', 'ADC', 'Support', 'Support'];
		const players = [];
		const inputs = document.querySelectorAll('input[type="text"]');

		for (let i = 0; i < inputs.length; i++) {
			const position = positions[i];
			const playerName = inputs[i].value;
			players.push({ 'position': position, 'summoner_name': playerName });
		}

		console.log(players);

		fetch('/api/AutoMatchMaking', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(players)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				matchData = data;
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}

	function calculateTotalWinningPercentage(team) {
		return (team.reduce((acc, player) => acc + player.winningPercentage, 0) / 5).toFixed(2);
	}
</script>

<div class="input-container">
	<div class="division">
		<div class="input-row">
			<span>TOP :</span> <input class="styled-input" placeholder="이름" type="text">
			<span>TOP :</span> <input class="styled-input" placeholder="이름" type="text">
		</div>
	</div>
	<div class="division">
		<div class="input-row">
			<span>JUG :</span> <input class="styled-input" placeholder="이름" type="text">
			<span>JUG :</span> <input class="styled-input" placeholder="이름" type="text">
		</div>
	</div>
	<div class="division">
		<div class="input-row">
			<span>MID :</span> <input class="styled-input" placeholder="이름" type="text">
			<span>MID :</span> <input class="styled-input" placeholder="이름" type="text">
		</div>
	</div>
	<div class="division">
		<div class="input-row">
			<span>ADC :</span> <input class="styled-input" placeholder="이름" type="text">
			<span>ADC :</span> <input class="styled-input" placeholder="이름" type="text">
		</div>
	</div>
	<div class="division">
		<div class="input-row">
			<span>SPT :</span> <input class="styled-input" placeholder="이름" type="text">
			<span>SPT :</span> <input class="styled-input" placeholder="이름" type="text">
		</div>
	</div>
</div>
<button on:click={sendMatchmakingRequest}>매치메이킹 요청 보내기</button>

{#if matchData.length > 0}
	{#each matchData as team, i}
		<h2>Team {i + 1}</h2>
		<table>
			<thead>
			<tr>
				<th>Summoner Name</th>
				<th>Position</th>
				<th>Winning Percentage</th>
			</tr>
			</thead>
			<tbody>
			{#each team as player}
				<tr>
					<td>{player.summoner_name}</td>
					<td>{player.position}</td>
					<td>{player.winningPercentage}%</td>
				</tr>
			{/each}
			</tbody>
			<tfoot>
			<tr>
				<td colspan="2">Total Winning Percentage:</td>
				<td>{calculateTotalWinningPercentage(team)}%</td>
			</tr>
			</tfoot>
		</table>
	{/each}
{:else}
	{#if matchData.length === 0}
		<p>매치 데이터가 없습니다.</p>
	{/if}
{/if}

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }

    tfoot {
        font-weight: bold;
    }

    .input-container {
        margin-bottom: 5px;
    }

    .division {
        margin-bottom: 5px;
    }

    .input-row {
        margin-bottom: 5px;
    }

    .division span {
        margin-right: 10px;
    }

    .division input[type="text"] {
        margin-right: 10px;
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 5px;
    }

    .division input[type="text"]:last-child {
        margin-right: 0;
    }

    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }
</style>
