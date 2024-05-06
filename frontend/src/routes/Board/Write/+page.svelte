<script>
    import {goto} from "$app/navigation";

    let title = '';
    let content = '';
    let writer = '';
    let youtubeUrl = '';
    let category = '건의';

    function handleSubmit() {
        const time = new Date();
        const visit = 0;
        if (category === null) {
            category = '자유';
        }
        fetch("/api/board/write", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, content, writer, youtubeUrl, category, time, visit
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(data => {
                console.log(data);
                goto('/Board')
            })
            .catch(error => {
                console.error(error);
            });}
</script>

<div class="container">
    <form on:submit|preventDefault={handleSubmit}>
        <div class="select-container">
            <select bind:value={category}>
                <option value="건의">건의</option>
                <option value="자유">자유</option>
                <option value="하이라이트">하이라이트</option>
            </select>
        </div>


        <input bind:value={title} class="title" id="title" placeholder="제목을 입력하세요" type="text">
        <input bind:value={writer} class="writer" id="writer" placeholder="작성자를 입력하세요" type="text">

        {#if category === '하이라이트'}
            <input type="text" id="youtubeUrl" class="youtubeUrl" bind:value={youtubeUrl}
                   placeholder="YouTube URL을 입력하세요">
        {/if}

        <textarea bind:value={content} id="content" placeholder="내용을 입력하세요" rows="10"></textarea>

        <button type="submit">제출하기</button>
    </form>
</div>

<style>
    .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    select, .title, .writer, .youtubeUrl, textarea {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        background-color: #3491e3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #2878b5;
    }

    .select-container {
        position: relative;
        width: 100%;
        margin-top: 10px;
    }

    .select-container select {
        appearance: none;
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: white;
        cursor: pointer;
        position: relative;
        z-index: 2;
    }

    .select-container::after {
        content: '▼';
        position: absolute;
        top: 0;
        right: 10px;
        pointer-events: none;
        width: 10%;
        text-align: center;
        height: 100%;
        line-height: 35px;
        color: #888;
        z-index: 1;
    }

</style>
