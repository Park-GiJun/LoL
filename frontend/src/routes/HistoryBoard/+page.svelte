<script>
    import { onMount } from 'svelte';

    let bottomDuoStats = [];

    onMount(async () => {
        const response = await fetch('/api/getBotDuoStats');
        bottomDuoStats = await response.json();
    });
</script>

<h2>바텀 듀오</h2>
<div class="bottomDuoGrid">
    {#each bottomDuoStats as {adcNickname, supportNickname, duoCount, winCount, winRate}}
        <div class="stat-card">
            <div class="stat-header">{adcNickname} & {supportNickname}</div>
            <div class="stat-content">Games Played: {duoCount}</div>
            <div class="stat-content">Wins: {winCount}</div>
            <div class="stat-content">Win Rate: {winRate}%</div>
        </div>
    {/each}
</div>

<style>
    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .bottomDuoGrid {
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-gap: 20px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .stat-card {
        background-color: #f9f9f9;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    .stat-header {
        font-size: 1.25em;
        color: #333;
        margin-bottom: 10px;
        font-weight: 700;
        text-align: center;
    }

    .stat-content {
        font-size: 1.125em;
        color: #555;
        font-weight: 400;
        text-align: center;
    }

    @media (max-width: 1024px) {
        .bottomDuoGrid {
            grid-template-columns: repeat(3, 2fr);
        }

        .stat-header {
            font-size: 1em;
        }

        .stat-content {
            font-size: 0.875em;
        }
    }

    @media (max-width: 600px) {
        .bottomDuoGrid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }

        .stat-header {
            font-size: 0.875em;
        }

        .stat-content {
            font-size: 0.75em;
        }
    }
</style>
