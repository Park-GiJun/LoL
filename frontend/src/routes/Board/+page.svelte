<script>
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    let currentPage = 1;
    const itemsPerPage = 10;
    let data = "";

    async function getBoard(){
        try {
            const response = await fetch('api/board/getBoard');
            data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    onMount(() => {
        getBoard();
    });

    function nextPage() {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage += 1;
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage -= 1;
        }
    }

    function goToPage(page) {
        currentPage = page;
    }

    function goToWrite() {
        goto('/Board/Write');
    }

    function goToDetail(id) {
        goto(`/Board/Detail/${id}`);
    }

    $: startIndex = (currentPage - 1) * itemsPerPage;
    $: endIndex = startIndex + itemsPerPage;
    $: currentData = data.slice(startIndex, endIndex);

    function getPages(totalPages) {
        return Array.from({length: totalPages}, (_, i) => i + 1);
    }
</script>

<div class="main_container">
    <table>
        <thead>
        <tr>
            <th class="category-col">Category</th>
            <th class="index-col">index</th>
            <th class="title-col">title</th>
            <th>writer</th>
            <th>date</th>
            <th class="visit-col">visit</th>
        </tr>
        </thead>
        {#if currentData.length > 0}
            <tbody>
            {#each currentData as item}
                <tr on:click={() => goToDetail(item.id)}>
                    <td>{item.category}</td>
                    <td>{item.idx}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                    <td>{item.time}</td>
                    <td>{item.visit}</td>
                </tr>
            {/each}
            </tbody>
        {:else}
            <tbody>
            <tr>
                <td colspan="6">표시할 정보가 없습니다.</td>
            </tr>
            </tbody>
        {/if}
    </table>
    <button class="writeButton" on:click={goToWrite}>글쓰기</button>
    <div class="pagination">
        <button on:click={() => goToPage(1)}>처음</button>
        <button on:click={prevPage}>이전</button>
        {#each getPages(Math.ceil(data.length / itemsPerPage)) as page}
            <button on:click={() => goToPage(page)}>{page}</button>
        {/each}
        <button on:click={nextPage}>다음</button>
        <button on:click={() => goToPage(getPages(Math.ceil(data.length / itemsPerPage)).length)}>끝</button>
    </div>
</div>
<style>
    table {
        width: 100%;
        border-collapse: collapse;
        border-radius: 10px;
    }

    th, td {
        text-align: center;
        border: 1px solid #ddd;
        padding: 12px;
    }

    .category-col, .index-col, .visit-col {
        width: 10%;
    }

    .title-col {
        width: 40%;
    }

    th {
        background-color: #3491e3;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .main_container{
        margin-top: 10px;
        border-radius: 10px;
    }

    .main_container select, .main_container input[type="text"], .main_container button {
        padding: 10px;
        margin: 5px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 16px;
    }

    .main_container select {
        width: 150px;
    }

    .main_container input[type="text"] {
        width: calc(100% - 270px);
    }

    .main_container button {
        background-color: #3491e3;
        color: white;
        border: none;
        cursor: pointer;
    }

    .main_container button:hover {
        background-color: white;
        color: #3491e3;
    }

    .pagination {
        margin-top: 20px;
        text-align: center;
    }

    .pagination button {
        padding: 10px 16px;
        margin: 0 5px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #3491e3;
        cursor: pointer;
    }

    .pagination button:first-child {
        margin-right: 10px;
    }

    .pagination button:last-child {
        margin-left: 10px;
    }

    .writeButton{
        margin-top: 10px;
        position: fixed;
        right: 15px;
    }
</style>