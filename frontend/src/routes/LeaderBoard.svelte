<script>
    import { flip } from 'svelte/animate';
    import { onMount } from "svelte";
    import { writable } from 'svelte/store';

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
                WinningPercentage: item.winningPercentage
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
            const sortedRows = [...currentRows].sort((a, b) => {
                let valueA = a[sortKey];
                let valueB = b[sortKey];

                // 숫자로 변환하여 비교
                if (sortKey === 'WinningPercentage') {
                    valueA = parseFloat(valueA);
                    valueB = parseFloat(valueB);
                }

                // 숫자 비교
                if (!isNaN(valueA) && !isNaN(valueB)) {
                    return isAscending ? valueA - valueB : valueB - valueA;
                }

                // 문자열 비교 (대소문자 구분 없이)
                valueA = valueA?.toString().toLowerCase() ?? "";
                valueB = valueB?.toString().toLowerCase() ?? "";
                if (valueA < valueB) return isAscending ? -1 : 1;
                if (valueA > valueB) return isAscending ? 1 : -1;

                return 0;
            });

            return sortedRows;
        });
    }
</script>


<div style="overflow-x:auto; overflow-y:auto; max-height: 500px;">
    <table>
        <thead>
        <tr>
            <th on:click={() => sortTable('PlayedGame')}>PlayedGame</th>
            <th on:click={() => sortTable('Nickname')}>Nickname</th>
            <th on:click={() => sortTable('Name')}>Name</th>
            <th on:click={() => sortTable('MostChampion')}>Most Champion</th>
            <th on:click={() => sortTable('WinningPercentage')}>WinningPercentage</th>
        </tr>
        </thead>
        <tbody>
        {#each $rows as row (row.id)}
            <tr animate:flip={{ duration: 400 }}>
                <td>{row.PlayedGame}</td>
                <td>{row.Nickname}</td>
                <td>{row.Name}</td>
                <td>{row.MostChampion}</td>
                <td>{row.WinningPercentage}</td>
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
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f4f4f4;
        cursor: pointer;
    }
</style>
