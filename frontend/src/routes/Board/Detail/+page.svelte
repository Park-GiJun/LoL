<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { get } from "svelte/store";

    let id = "";
    let detail = {};

    function getPageId() {
        return get(page).params.id;
    }

    async function getDetail() {
        try {
            const response = await fetch(`/api/board/getBoardDetail/${id}`);
            if (response.ok) {
                detail = await response.json();
                console.log(detail);
            } else {
                console.error("Failed to fetch detail:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching detail:", error);
        }
    }

    onMount(() => {
        id = getPageId();
        getDetail();
    });

    function goBack() {
        goto('/Board');
    }
</script>

<div class="detail-container">
    {#if Object.keys(detail).length > 0}
        <div>
            <h2>{detail.title}</h2>
            <p>Category: {detail.category}</p>
            <p>Writer: {detail.writer}</p>
            <p>Date: {detail.time}</p>
            <p>Visit Count: {detail.visit}</p>
            <div class="content">
                <h3>Content</h3>
                <p>{detail.content}</p>
            </div>
            {#if detail.youtubeUrl}
                <div class="youtube">
                    <h3>YouTube Video</h3>
                    <iframe
                            width="560"
                            height="315"
                            src={detail.youtubeUrl}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                    ></iframe>
                </div>
            {/if}
        </div>
    {:else}
        <p>Loading...</p>
    {/if}

    <button on:click={goBack}>Back to List</button>
</div>

<style>
    .detail-container {
        width: 80%;
        margin: auto;
        text-align: left;
    }

    h2, h3 {
        color: #3491e3;
    }

    .content {
        margin-top: 20px;
    }

    .youtube {
        margin-top: 30px;
    }

    button {
        margin-top: 20px;
        padding: 10px 16px;
        border-radius: 4px;
        background-color: #3491e3;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: white;
        color: #3491e3;
    }
</style>
