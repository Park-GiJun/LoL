<script>
    import { onMount } from "svelte";
    let matches = [];
    let filteredMatches = [];
    let selectedDate = '2024-03-24'; // 초기 선택된 날짜
    let availableDates = []; // 사용 가능한 날짜 목록

    onMount(async () => {
        const response = await fetch('/api/matches');
        matches = await response.json();

        // 모든 날짜 추출하여 중복 제거 후 정렬하여 availableDates에 할당
        const dates = new Set(matches.flat().map(match => match.date));
        availableDates = Array.from(dates).sort();

        filterMatchesByDate();
    });

    $: if(selectedDate) {
        filterMatchesByDate();
    }

    function filterMatchesByDate() {
        filteredMatches = matches.filter(match =>
            match.some(player => player.date === selectedDate)
        ).map(match => {
            const teamPurple = match.filter(player => player.teamColor === 'Purple');
            const teamRed = match.filter(player => player.teamColor === 'Red');
            const winningTeam = match.find(player => player.winning === 1)?.teamColor === 'Purple' ? 'Purple' : 'Red';
            return { teamPurple, teamRed, winningTeam };
        });
    }
</script>

<select bind:value={selectedDate}>
    {#each availableDates as date}
        <option value={date}>{date}</option>
    {/each}
</select>


{#each filteredMatches as match}
    <div class="match-container">
    <table>
        <thead>
        <tr>
            <th class="team-purple nickname" colspan="4">퍼플 팀 {match.winningTeam === 'Purple' ? '(승리)' : ''}</th>
            <th class="team-red nickname" colspan="4">레드 팀 {match.winningTeam === 'Red' ? '(승리)' : ''}</th>
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
        {#each match.teamPurple as player, index}
            <tr>
                <td class={player.winning ? 'victory' : 'defeat'}>{player.nickname}</td>
                <td class={player.winning ? 'victory' : 'defeat'}>{player.summonerName}</td>
                <td class={player.winning ? 'victory' : 'defeat'}>{player.champion}</td>
                <td class={player.winning ? 'victory' : 'defeat'}>{player.kills}/{player.deaths}/{player.assists}</td>
                {#if match.teamRed[index]}
                    <td class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].nickname}</td>
                    <td class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].summonerName}</td>
                    <td class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].champion}</td>
                    <td class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].kills}/{match.teamRed[index].deaths}/{match.teamRed[index].assists}</td>
                {/if}
            </tr>
        {/each}
        </tbody>
    </table>
    </div>
{/each}

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