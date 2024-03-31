<script>
	let nickname;
	let name;

	function submitName() {
		fetch('/api/submitName', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ nickname: nickname, name: name })
		}).then(response => response.text())
			.then(data => {
				alert(data);
				nickname = '';
				name = '';
			})
	}
</script>

<style>
    input[type="text"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
    }

    button:hover {
        background-color: #45a049;
    }

    .form-container {
        width: 100%;
        max-width: 100%;
        padding: 20px;
        background-color: white;
        margin: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
</style>

<div class="form-container">
	<input type="text" bind:value={nickname} placeholder="닉네임"/>
	<input type="text" bind:value={name} placeholder="이름"/>
	<button on:click={submitName}>입력</button>
</div>
