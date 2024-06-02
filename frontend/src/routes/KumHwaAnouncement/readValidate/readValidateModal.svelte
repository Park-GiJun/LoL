<script>
	export let showModal = false;
	export let closeModal = () => {};

	let category = [
		{ name: 'Opt1', selected: false },
		{ name: 'Opt2', selected: false },
		{ name: 'Opt3', selected: false }
	];

	let allUsers = {
		Opt1: [
			{ name: 'User1-1', selected: false },
			{ name: 'User1-2', selected: false },
			{ name: 'User1-3', selected: false }
		],
		Opt2: [
			{ name: 'User2-1', selected: false },
			{ name: 'User2-2', selected: false },
			{ name: 'User2-3', selected: false }
		],
		Opt3: [
			{ name: 'User3-1', selected: false },
			{ name: 'User3-2', selected: false },
			{ name: 'User3-3', selected: false }
		]
	};

	let nonValidateUser = [];
	let validatedUser = [];

	function toggleSelection(item) {
		item.selected = !item.selected;
		nonValidateUser = [...nonValidateUser];
		validatedUser = [...validatedUser];
		console.log(`Selected item: ${item.name}`);
	}

	function selectCategory(cateOne) {
		category = category.map(item => {
			item.selected = item.name === cateOne.name;
			return item;
		});
		nonValidateUser = allUsers[cateOne.name];
	}

	function moveToValidated() {
		const selectedItems = nonValidateUser.filter(item => item.selected);
		selectedItems.forEach(item => {
			if (!validatedUser.some(user => user.userName === item.name)) {
				validatedUser = [...validatedUser, { userName: item.name, selected: false }];
			}
			item.selected = false;
		});
		nonValidateUser = [...nonValidateUser];
	}

	function moveFromValidated() {
		const selectedValidatedUsers = validatedUser.filter(item => item.selected);
		validatedUser = validatedUser.filter(item => !item.selected);
	}

	function handleDragStart(event, item) {
		event.dataTransfer.setData('application/json', JSON.stringify(item));
	}

	function handleDrop(event) {
		event.preventDefault();
		const dragData = JSON.parse(event.dataTransfer.getData('application/json'));
		if (!validatedUser.some(user => user.userName === dragData.name)) {
			validatedUser = [...validatedUser, { userName: dragData.name, selected: false }];
		}
	}

	function handleDragOver(event) {
		event.preventDefault();
	}
</script>

{#if showModal}
	<div class="modal-overlay" on:click={closeModal} role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
		<div class="modal-content" on:click|stopPropagation>
			<div class="modal-body">
				<h2 id="modal-title" class="sr-only">옵션 선택 모달</h2>
				<p id="modal-description" class="sr-only">옵션을 선택하거나 열람 가능자를 추가하거나 제거할 수 있습니다.</p>
				<div class="options-container">
					<div class="option-box">
						<h3 class="text-center">분류</h3>
						<ul class="option-list" role="listbox" aria-label="분류 목록">
							{#each category as cateOne}
								<li
									role="option"
									aria-selected={cateOne.selected}
									class="option-item"
									class:selected={cateOne.selected}
									on:click={() => selectCategory(cateOne)}
								>{cateOne.name}</li>
							{/each}
						</ul>
					</div>
					<div class="option-box">
						<h3 class="text-center">사용자</h3>
						<ul class="option-list" role="listbox" aria-label="사용자 목록">
							{#each nonValidateUser as user}
								<li
									role="option"
									aria-selected={user.selected}
									class="option-item"
									class:selected={user.selected}
									on:click={() => toggleSelection(user)}
									draggable="true"
									on:dragstart={(event) => handleDragStart(event, user)}
								>{user.name}</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="buttons-container">
					<button on:click={moveToValidated} class="button" aria-label="열람 가능자 추가">→</button>
					<button on:click={moveFromValidated} class="button" aria-label="열람 가능자 제거">←</button>
				</div>
				<div class="validated-container" on:drop={handleDrop} on:dragover={handleDragOver}>
					<div class="option-box validated-box">
						<h3 class="text-center">열람 가능자</h3>
						<ul class="option-list" role="listbox" aria-label="열람 가능자 목록">
							{#each validatedUser as user}
								<li
									role="option"
									aria-selected={user.selected}
									class="option-item"
									class:selected={user.selected}
									on:click={() => toggleSelection(user)}
								>{user.userName}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button on:click={closeModal} class="button" aria-label="닫기">닫기</button>
			</div>
		</div>
	</div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 80%;
        max-width: 800px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }

    .modal-body {
        display: flex;
        padding: 20px;
    }

    .options-container, .validated-container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .option-box {
        border: 1px solid #d1d5db;
        border-radius: 8px;
        margin: 0 10px;
        padding: 10px;
        flex: 1;
    }

    .validated-box {
        border-color: #d1d5db;
    }

    .option-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .option-item {
        cursor: pointer;
        padding: 10px;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 5px;
        transition: background-color 0.2s, border 0.2s;
        overflow-y: auto;
    }

    .option-item.selected {
        background-color: #b3d4fc;
        border: 2px solid #007bff;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 10px;
        transition: background-color 0.2s;
    }

    .button:hover {
        background-color: #0056b3;
    }

    .modal-footer {
        padding: 10px;
        text-align: right;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
</style>
