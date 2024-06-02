<script>
    import { onMount } from 'svelte';

    let bottomDuoStats = [];
    let topTrioStats = [];
    let bestFriendsStats = [];

    onMount(async () => {
        const response = await fetch('/api/getBotDuoStats');
        bottomDuoStats = await response.json();

        const response2 = await fetch('/api/getTrioStats');
        topTrioStats = await response2.json();

        const response3 = await fetch('/api/getBestFriendsStats');
        bestFriendsStats = await response3.json();
    });
</script>

<div class="container">
    <div class="main-tables">
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
    </div>
    <div class="best-friends">
        <h2>최고의 친구</h2>
        <div class="scrollable-table">
            <table class="stats-table">
                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Best Friend</th>
                    <th>Games Played</th>
                    <th>Wins</th>
                    <th>Win Rate</th>
                </tr>
                </thead>
                <tbody>
                {#each bestFriendsStats as {fistNickname, secondNickName, duoCount, winCount, winRate}}
                    <tr>
                        <td>{fistNickname}</td>
                        <td>{secondNickName}</td>
                        <td>{duoCount}</td>
                        <td>{winCount}</td>
                        <td>{winRate}%</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .main-tables {
        width: 65%;
    }

    .best-friends {
        width: 30%;
        max-height: 80vh;
        overflow-y: auto;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #f9f9f9;
    }

    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .stats-table {
        width: 100%;
        border-collapse: collapse;
        background-color: #f9f9f9;
        margin-bottom: 40px;
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

    .scrollable-table {
        overflow-y: auto;
        max-height: 70vh;
    }

    @media (max-width: 1024px) {
        .container {
            flex-direction: column;
        }

        .main-tables, .best-friends {
            width: 100%;
        }

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
