<script>
	import { onMount } from 'svelte';

	let statsData = {};
	let stats = [];

	onMount(async () => {
		const response = await fetch('/api/getArchive');
		statsData = await response.json();
		stats = computedStats();
	});

	function computedStats() {
		return [
			{ header: "Total Games Played", key: "totalGamesPlayed" },
			{ header: "Days Played", key: "totalDaysPlayed" },
			{ header: "Total Kills", key: "totalKills" },
			{ header: "Most Champion", key: "mostPlayedChampion" },
			{ header: "Most Kills", key: "mostKillsChampion" },
			{ header: "Most Deaths", key: "mostDeathsChampion" },
			{ header: "Most Champions", key: "mostDifferentChampion"},
			{ header: "Best KDA", key: "bestKDAChampion"}
		].map(stat => ({ ...stat, value: statsData[stat.key] || 'Loading...' }));
	}
</script>





<div class="stats-grid">
	{#each stats as {header, value}}
		<div class="stat-card">
			<div class="stat-header">{header}</div>
			<div class="stat-content">{value}</div>
		</div>
	{/each}
</div>


<style>
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px;
    }
    .stat-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }
    .stat-header {
        font-size: 1em;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
    }
    .stat-content {
        font-size: 1.5em;
        color: #666;
        font-weight: 400;
    }
	@media (max-width: 1024px) {
		.stats-grid {
			grid-template-columns: repeat(1, 1fr);
		}
		.stat-header {
			white-space: nowrap;
			font-size: 16px;

		}
		.stat-content{
			font-size: 14px;
		}
	}

</style>
