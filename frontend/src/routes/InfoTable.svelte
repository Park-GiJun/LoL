<script>
    import {onMount} from "svelte";

    let matches = {
        teamPurple: [],
        teamRed: [],
        winningTeam: ''
    };

    onMount(async () => {
        const response = await fetch('/api/recentMatch');
        const data = await response.json();

        const teamPurple = data.filter(player => player.teamColor === 'Purple');
        const teamRed = data.filter(player => player.teamColor === 'Red');
        const winningTeam = data.find(player => player.winning === 1)?.teamColor === 'Purple' ? 'Purple' : 'Red';

        matches = {...matches, teamPurple, teamRed, winningTeam};
    });
</script>


<table>
    <thead>
    <tr>
        <th class="team-purple" colspan="4">퍼플 팀 {matches.winningTeam === 'Purple' ? '(승리)' : ''}</th>
        <th class="team-red" colspan="4">레드 팀 {matches.winningTeam === 'Red' ? '(승리)' : ''}</th>
    </tr>
    <tr>
        <th>닉네임</th>
        <th>이름</th>
        <th>챔피언</th>
        <th>KDA</th>
        <th>닉네임</th>
        <th>이름</th>
        <th>챔피언</th>
        <th>KDA</th>
    </tr>
    </thead>
    <tbody>
    {#each matches.teamPurple as player, index (player.id)}
        <tr class={matches.winningTeam === 'Purple' ? 'victory' : 'defeat'}>
            <td>{player.nickname}</td>
            <td>{player.summonerName}</td>
            <td>{player.champion}</td>
            <td>{player.kills}/{player.deaths}/{player.assists}</td>
            {#if matches.teamRed[index]}
                <td>{matches.teamRed[index].nickname}</td>
                <td>{matches.teamRed[index].summonerName}</td>
                <td>{matches.teamRed[index].champion}</td>
                <td>{matches.teamRed[index].kills}/{matches.teamRed[index].deaths}/{matches.teamRed[index].assists}</td>
            {/if}
        </tr>
    {/each}
    </tbody>

</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid var(--bg-2);
        padding: 8px;
        text-align: center;
    }

    .team-purple {
        background-color: #9C27B0;
        color: white;
    }

    .team-red {
        background-color: #F44336;
        color: white;
    }

    tbody tr:nth-child(odd) {
        background-color: var(--bg-3);
    }

    tbody tr:nth-child(even) {
        background-color: var(--bg-1);
    }

    .victory {
        background-color: #b3e5fc; /* 연한 하늘색 */
    }

    .defeat {
        background-color: #ffcdd2; /* 연한 빨간색 */
    }
</style>
