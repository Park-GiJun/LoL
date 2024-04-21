<script>
    import {flip} from 'svelte/animate';
    import {onMount} from "svelte";
    import {writable} from 'svelte/store';

    const rows = writable([]);

    const loadData = async () => {
        try {
            const response = await fetch('/api/loadLeaderboard');
            const data = await response.json();
            console.log(data);
            const standardizedData = data.map((item, index) => ({
                id: index,
                PlayedGame: item.playedGames,
                Nickname: item.nickname,
                Name: item.summonerName,
                MostChampion: item.mostChampion,
                WinningPercentage: item.winningPercentage,
                Kda: item.kda
            }));
            rows.set(standardizedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    onMount(loadData);

    let currentSort = 'PlayedGame';
    let isAscending = true;

    function sortTable(sortKey) {
        if (currentSort === sortKey) {
            isAscending = !isAscending;
        } else {
            isAscending = true;
        }
        currentSort = sortKey;

        rows.update(currentRows => {
            return [...currentRows].sort((a, b) => {
                let valueA = a[sortKey];
                let valueB = b[sortKey];

                if (sortKey === 'WinningPercentage') {
                    valueA = parseFloat(valueA);
                    valueB = parseFloat(valueB);
                }

                if (!isNaN(valueA) && !isNaN(valueB)) {
                    return isAscending ? valueA - valueB : valueB - valueA;
                }

                valueA = valueA?.toString().toLowerCase() ?? "";
                valueB = valueB?.toString().toLowerCase() ?? "";
                if (valueA < valueB) return isAscending ? -1 : 1;
                if (valueA > valueB) return isAscending ? 1 : -1;

                return 0;
            });
        });
    }
</script>


<div style="overflow-x:auto; overflow-y:auto; max-height: 500px;">
    <table class="table-container">
        <thead>
        <tr>
            <th on:click={() => sortTable('PlayedGame')}>PlayedGame</th>
            <th on:click={() => sortTable('Nickname')}>Nickname</th>
            <th on:click={() => sortTable('Name')}>Name</th>
            <th on:click={() => sortTable('MostChampion')}>Most Champion</th>
            <th on:click={() => sortTable('WinningPercentage')}>WinningPercentage</th>
            <th on:click={() => sortTable('Kda')}>KDA</th>
        </tr>
        </thead>
        <tbody>
        {#each $rows as row (row.id)}
            <tr animate:flip={{ duration: 400 }}>
                <td>{row.PlayedGame}</td>
                <td><a href="https://www.op.gg/summoners/kr/{row.Nickname}" target="_blank">{row.Nickname}</a></td>
                <td>{row.Name}</td>
                <td>{row.MostChampion}</td>
                <td>{row.WinningPercentage}</td>
                <td>{row.Kda}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        min-width: 150px;
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f4f4f4;
        cursor: pointer;
    }

    @media (max-width:1024px) {
        th, td {
            min-width: 100px;
            padding: 4px;
            font-size: 14px;
        }
        .table-container {
            overflow-x: scroll;
        }
    }
</style>
