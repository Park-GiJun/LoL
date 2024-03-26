<script>
    import { onMount } from "svelte";

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
        const winningTeam = teamPurple.some(player => player.winning === 1) ? 'Purple' : 'Red';

        matches = { ...matches, teamPurple, teamRed, winningTeam };
    });
</script>

<table>
    <thead>
    <tr>
        <th class="team-purple nickname" colspan="4">퍼플 팀 {matches.winningTeam === 'Purple' ? '(승리)' : ''}</th>
        <th class="team-red nickname" colspan="4">레드 팀 {matches.winningTeam === 'Red' ? '(승리)' : ''}</th>
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
    {#each matches.teamPurple as player, index}
        <tr>
            <td class={player.winning ? 'victory' : 'defeat'}>{player.nickname}</td>
            <td class={player.winning ? 'victory' : 'defeat'}>{player.summonerName}</td>
            <td class={player.winning ? 'victory' : 'defeat'}>{player.champion}</td>
            <td class={player.winning ? 'victory' : 'defeat'}>{player.kills}/{player.deaths}/{player.assists}</td>
            {#if matches.teamRed[index]}
                <td class={matches.teamRed[index].winning ? 'victory' : 'defeat' }>{matches.teamRed[index].nickname}</td>
                <td class={matches.teamRed[index].winning ? 'victory' : 'defeat' }>{matches.teamRed[index].summonerName}</td>
                <td class={matches.teamRed[index].winning ? 'victory' : 'defeat' }>{matches.teamRed[index].champion}</td>
                <td class={matches.teamRed[index].winning ? 'victory' : 'defeat' }>{matches.teamRed[index].kills}/{matches.teamRed[index].deaths}/{matches.teamRed[index].assists}</td>
            {/if}
        </tr>
    {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px 8px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    th {
        background-color: #f2f2f2;
        color: #333;
        font-weight: bold;
    }

    .nickname, .summonerName, .champion, .kda {
        width: 20%;
    }

    .team-purple, .team-red {
        font-size: 16px;
    }

    .team-purple {
        background-color: #D8BFD8;
        color: white;
    }

    .team-red {
        background-color: #FA8072;
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


