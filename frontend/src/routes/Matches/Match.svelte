<script>
    import { onMount } from "svelte";

    let matches = [];
    let filteredMatches = [];

    let availableDates = [];
    let selectedDate;
    let currentYear;
    let currentMonth;

    onMount(async () => {
        const response = await fetch('/api/matches');
        matches = await response.json();

        const dates = new Set(matches.flat().map(match => match.date));
        availableDates = Array.from(dates).sort((a, b) => new Date(b) - new Date(a));

        selectedDate = availableDates[0];
        const today = new Date(selectedDate);
        currentYear = today.getFullYear();
        currentMonth = today.getMonth();
        filterMatchesByDate();
    });

    $: if (selectedDate) {
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

    function generateCalendar(year, month) {
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let daysInMonth = lastDay.getDate();

        let calendar = [];
        let week = [];

        for (let i = 0; i < firstDay.getDay(); i++) {
            week.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            if (week.length === 7) {
                calendar.push(week);
                week = [];
            }
            week.push(new Date(year, month, i).toISOString().split('T')[0]);
        }

        if (week.length > 0) {
            while (week.length < 7) {
                week.push(null);
            }
            calendar.push(week);
        }

        return calendar;
    }

    function previousMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    }

    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }

    function getMonthName(month) {
        const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        return monthNames[month];
    }
</script>

<div class="calendar-header">
    <button on:click={previousMonth}>&lt;</button>
    <span>{getMonthName(currentMonth)} {currentYear}</span>
    <button on:click={nextMonth}>&gt;</button>
</div>

<div class="calendar">
    {#each generateCalendar(currentYear, currentMonth) as week}
        {#each week as date}
            {#if date}
                <button
                  class:selected={date === selectedDate}
                  class:disabled={!availableDates.includes(date)}
                  on:click={() => selectedDate = date}
                  disabled={!availableDates.includes(date)}
                >
                    {new Date(date).getDate()}
                </button>
            {:else}
                <button class="disabled" disabled></button>
            {/if}
        {/each}
    {/each}
</div>

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
                    <td class={player.winning ? 'victory' : 'defeat'}>{player.kills}/{player.deaths}
                        /{player.assists}</td>
                    {#if match.teamRed[index]}
                        <td
                          class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].nickname}</td>
                        <td
                          class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].summonerName}</td>
                        <td
                          class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].champion}</td>
                        <td class={match.teamRed[index].winning ? 'victory' : 'defeat' }>{match.teamRed[index].kills}
                            /{match.teamRed[index].deaths}/{match.teamRed[index].assists}</td>
                    {/if}
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
{/each}

<style>
    .calendar-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    .calendar-header button {
        padding: 5px 10px;
        background-color: #3492e5;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
    }

    .calendar-header span {
        margin: 0 15px;
        font-size: 18px;
        font-weight: bold;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        margin: 20px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #f9f9f9;
    }

    .calendar button {
        padding: 10px;
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
    }

    .calendar button.disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
    }

    .calendar button.selected {
        background-color: #3492e5;
        color: white;
    }

    .calendar button:hover:not(.disabled):not(.selected) {
        background-color: #ddd;
    }

    table {
        border-collapse: collapse;
        table-layout: fixed;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 100%;
    }

    th, td {
        min-width: 150px;
        border: 1px solid #ddd;
        padding: 12px 8px;
        text-align: center;
        white-space: nowrap;
    }

    th {
        background-color: #f2f2f2;
        color: #333;
        font-weight: bold;
    }

    .match-container {
        overflow-x: auto;
        overflow-y: auto;
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

    @media (max-width: 1024px) {
        .nickname, .summonerName, .champion, .kda {
            width: 25%;
            height: 25%;
            font-size: 16px;
        }

        .team-purple, .team-red {
            font-size: 16px;
        }

        tr, td {
            min-width: 100px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
