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
			{ header: "총 플레이 게임 수", key: "totalGamesPlayed" },
			{ header: "게임한 날짜 수", key: "totalDaysPlayed" },
			{ header: "총 킬수", key: "totalKills" },
			{ header: "가장 많이 플레이된 챔피언", key: "mostPlayedChampion" },
			{ header: "가장 많이 킬을 기록한 챔피언", key: "mostKillsChampion" },
			{ header: "가장 많이 죽은 챔피언", key: "mostDeathsChampion" },
			{ header: "가장 많은 챔피언을 플레이한 사람", key: "mostDifferentChampion"},
			{ header: "가장 높은 KDA를 기록한 챔피언", key: "bestKDAChampion"}
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
			grid-template-columns: repeat(2, 1fr);
		}
		.stat-header, .stat-content {
			font-size: 0.9em;
		}
	}

</style>
