<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const stats = writable([]);
    let sortedBy = null;
    let sortOrder = 1;

    function calculateTier(rank, totalRows) {
        const tierPercentages = [0.2, 0.4, 0.6, 0.8];
        const tierLabels = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];

        for (let i = 0; i < tierPercentages.length; i++) {
            if (rank <= totalRows * tierPercentages[i]) {
                return tierLabels[i];
            }
        }

        return tierLabels[tierLabels.length - 1];
    }

    async function loadStats() {
        const response = await fetch('/api/tierList');
        const data = await response.json();

        data.forEach((row, index) => {
            row.tier = calculateTier(index + 1, data.length);
        });

        stats.set(data);
    }

    function sortBy(column) {
        if (sortedBy === column) {
            sortOrder *= -1;
        } else {
            sortedBy = column;
            sortOrder = 1;
        }

        stats.update(oldStats => {
            return oldStats.slice().sort((a, b) => {
                const valueA = a[column];
                const valueB = b[column];

                if (valueA < valueB) {
                    return -1 * sortOrder;
                }
                if (valueA > valueB) {
                    return 1 * sortOrder;
                }
                return 0;
            });
        });
    }
    onMount(loadStats);
</script>

<div class="main_container">
<table>
    <thead>
    <tr>
        <th><button on:click={() => sortBy('tier')}>Tier</button></th>
        <th><button on:click={() => sortBy('champion')}>Champion</button></th>
        <th><button on:click={() => sortBy('winRate')}>Win Rate</button></th>
        <th><button on:click={() => sortBy('banRate')}>ban Rate</button></th>
        <th><button on:click={() => sortBy('played')}>Played</button></th>
        <th><button on:click={() => sortBy('kda')}>KDA</button></th>
        <th><button on:click={() => sortBy('mostPlayedBy')}>Most Played By</button></th>
        <th><button on:click={() => sortBy('playersCount')}>Players Count</button></th>
    </tr>
    </thead>
    <tbody>
    {#each $stats as stat}
        <tr>
            <td data-tier="{stat.tier}">{stat.tier}</td>
            <td>{stat.champion}</td>
            <td>{stat.winRate}%</td>
            <td>{stat.banRate}%</td>
            <td>{stat.played}</td>
            <td>{stat.kda}</td>
            <td>{stat.mostPlayedBy}</td>
            <td>{stat.playersCount}</td>
        </tr>
    {/each}
    </tbody>
</table>
</div>

<style>

    .main_container{
        overflow-x: auto;
        overflow-y:auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        overflow-x: auto;
        overflow-y: auto;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
        min-width: 120px;
        font-family: Arial, sans-serif;
    }
    th {
        background-color: #eee;
    }


    td[data-tier="Tier 1"] {
        color: #ffffff;
        background-color: #ff6b6b;
    }

    td[data-tier="Tier 2"] {
        color: #ffffff;
        background-color: #ffb366;
    }

    td[data-tier="Tier 3"] {
        color: #ffffff;
        background-color: #ffd166;
    }

    td[data-tier="Tier 4"] {
        color: #ffffff;
        background-color: #8be9fd;
    }

    td[data-tier="Tier 5"] {
        color: #ffffff;
        background-color: #bd93f9;
    }

    @media (max-width: 1024px) {
        th, td {
            min-width: 120px;
        }
    }
</style>