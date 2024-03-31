<script>

	import { matchDetails } from './matchDetails.js';

	matchDetails = [];

</script>

{#if matchDetails}
	<div class="match-details">
		<table>
			<thead>
			<tr>
				<th class="team-purple nickname" colspan="4">퍼플 팀 {$matchDetails.winningTeam === 'Purple' ? '(승리)' : ''}</th>
				<th class="team-red nickname" colspan="4">레드 팀 {$matchDetails.winningTeam === 'Red' ? '(승리)' : ''}</th>
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
			{#each matchDetails.teamPurple as player, index}
				<tr>
					<td class={player.winning ? 'victory' : 'defeat'}>{player.nickname}</td>
					<td class={player.winning ? 'victory' : 'defeat'}>{player.summonerName}</td>
					<td class={player.winning ? 'victory' : 'defeat'}>{player.champion}</td>
					<td class={player.winning ? 'victory' : 'defeat'}>{player.kills}/{player.deaths}/{player.assists}</td>
					{#if matchDetails.teamRed && matchDetails.teamRed[index]}
						<td class={matchDetails.teamRed[index].winning ? 'victory' : 'defeat'}>{matchDetails.teamRed[index].nickname}</td>
						<td class={matchDetails.teamRed[index].winning ? 'victory' : 'defeat'}>{matchDetails.teamRed[index].summonerName}</td>
						<td class={matchDetails.teamRed[index].winning ? 'victory' : 'defeat'}>{matchDetails.teamRed[index].champion}</td>
						<td class={matchDetails.teamRed[index].winning ? 'victory' : 'defeat'}>{matchDetails.teamRed[index].kills}/{matchDetails.teamRed[index].deaths}/{matchDetails.teamRed[index].assists}</td>
					{/if}
				</tr>
			{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p>Loading match details...</p>
{/if}


<style>
    .match-details {
        max-width: 800px;
        max-height: 500px;
        overflow: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
        white-space: nowrap;
    }

    .team-purple, .team-red {
        background-color: #D8BFD8;
        color: white;
    }

    .victory {
        background-color: #B0E0E6;
        color: #2F4F4F;
    }

    .defeat {
        background-color: #F08080;
        color: white;
    }
</style>

