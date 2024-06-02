<script>
    import { onMount } from 'svelte';

    let bottomDuoStats = [];
    let topTrioStats = [];

    onMount(async () => {
        const response = await fetch('/api/getBotDuoStats');
        bottomDuoStats = await response.json();

        const response2 = await fetch('/api/getTrioStats');
        topTrioStats = await response2.json();
    });
</script>

<h2>바텀 듀오</h2>
<table class="stats-table">
    <thead>
    <tr>
        <th>ADC</th>
        <th>Support</th>
        <th>Games Played</th>
        <th>Wins</th>
        <th>Win Rate</th>
    </tr>
    </thead>
    <tbody>
    {#each bottomDuoStats as {adcNickname, supportNickname, duoCount, winCount, winRate}}
        <tr>
            <td>{adcNickname}</td>
            <td>{supportNickname}</td>
            <td>{duoCount}</td>
            <td>{winCount}</td>
            <td>{winRate}%</td>
        </tr>
    {/each}
    </tbody>
</table>

<h2>상체 트리오</h2>
<table class="stats-table">
    <thead>
    <tr>
        <th>Top</th>
        <th>Jungle</th>
        <th>Mid</th>
        <th>Games Played</th>
        <th>Wins</th>
        <th>Win Rate</th>
    </tr>
    </thead>
    <tbody>
    {#each topTrioStats as {midNickname, jungleNickname, topNickname, trioCount, winCount, winRate}}
        <tr>
            <td>{topNickname}</td>
            <td>{jungleNickname}</td>
            <td>{midNickname}</td>
            <td>{trioCount}</td>
            <td>{winCount}</td>
            <td>{winRate}%</td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .stats-table {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 40px auto;
        border-collapse: collapse;
        background-color: #f9f9f9;
    }

    .stats-table th, .stats-table td {
        padding: 12px 15px;
        text-align: center;
        border: 1px solid #ddd;
    }

    .stats-table th {
        background-color: #f1f1f1;
        font-weight: 700;
    }

    .stats-table tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .stats-table tbody tr:hover {
        background-color: #e9e9e9;
    }

    @media (max-width: 1024px) {
        .stats-table th, .stats-table td {
            padding: 10px 12px;
        }
    }

    @media (max-width: 600px) {
        .stats-table th, .stats-table td {
            padding: 8px 10px;
            font-size: 0.875em;
        }
    }
</style>
