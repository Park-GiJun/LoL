<script>
	export let teams = [];

	function calculateTotalWinningPercentage(team) {
		return (team.reduce((acc, player) => acc + player.winningPercentage, 0) / 5).toFixed(2);
	}
</script>

{#each teams as team, i}
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
