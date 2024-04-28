<script>

    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    let currentPage = 1;
    const itemsPerPage = 10;

    let data =""

async function getBoard(){
    const response = await fetch('api/board/getBoard');
    data = await response.json();
}

onMount(()=> {
    getBoard();
})
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

    $: startIndex = (currentPage - 1) * itemsPerPage;
    $: endIndex = startIndex + itemsPerPage;
    $: currentData = data.slice(startIndex, endIndex);

    function getPages(totalPages) {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    function goToWrite() {
        goto('/Board/Write');
    }
</script>


<div class="main_container">
    {#if currentData.length > 0}
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
            <tbody>
            {#each currentData as item}
                <tr>
                    <td>{item.category}</td>
                    <td>{item.index}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                    <td>{item.date}</td>
                    <td>{item.visit}</td>
                </tr>
            {/each}
            <tr>
                <td colspan="6">
                    <select>
                        <option>카테고리</option>
                        <option>제목</option>
                        <option>내용</option>
                        <option>작성자</option>
                    </select>
                    <input type="text">
                    <button>검색</button>
                </td>
            </tr>
            </tbody>
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
    {:else}
        <p>표시할 데이터가 없습니다.</p>
    {/if}
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