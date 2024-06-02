<script>
	import Quill from './Quill.svelte';
	import { content } from './api/content.js';
	import {get} from 'svelte/store';
	import ReadValidateModal from './readValidate/readValidateModal.svelte';

	// 임시 데이터
	let data = [
		{
			'idx': '01',
			'title': '4월 4주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.29',
			'HIT': 0,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '02',
			'title': '4월 3주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.22',
			'HIT': 2,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '03',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '04',
			'title': '4월 1주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.08',
			'HIT': 14,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '05',
			'title': '3월 4주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.03.29',
			'HIT': 0,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '06',
			'title': '3월 3주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.03.22',
			'HIT': 2,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '07',
			'title': '3월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.03.15',
			'HIT': 14,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '08',
			'title': '3월 1주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.08',
			'HIT': 14,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '09',
			'title': '2월 4주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.02.28',
			'HIT': 8,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '10',
			'title': '2월 3주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.02.21',
			'HIT': 12,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '11',
			'title': '2월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.02.14',
			'HIT': 12,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '12',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '13',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '14',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '15',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '16',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '17',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '18',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '19',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '20',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '21',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '22',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		},
		{
			'idx': '23',
			'title': '4월 2주 공지사항입니다. 각 매장은 공지사항을 확인해주세요.',
			'date': '2024.04.15',
			'HIT': 5,
			'CREATE_ID': '김금화'
		}
	];

	let writeBol = false;
	let readValidateBol = false;

	function toggleModal() {
		if (writeBol) {
			content.set('');
		}
		writeBol = !writeBol;
	}

	async function getBoard() {
		const response = await fetch('private/home/announcement/api/select');
		data = await response.json();
	}

	function printContent() {
		console.log(get(content));
	}

	function toggleReadValidate() {
		console.log(readValidateBol);
		readValidateBol = !readValidateBol;
	}
</script>



<div class="container">
	<div class="header">
		<div></div>
		<div>
			<button class="button" on:click={toggleModal}>글작성</button>
		</div>
	</div>
	<div class="table-container">
		<table class="table">
			<thead>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성날짜</th>
				<th>조회수</th>
				<th>작성자</th>
			</tr>
			</thead>
			{#if data.length === 0}
				<tbody>
				<tr>
					<td colspan="5">내용이 없습니다.</td>
				</tr>
				</tbody>
			{:else}
				<tbody>
				{#each data as item, index (index)}
					<tr>
						<td>{item.idx}</td>
						<td id="boardTitle">{item.title}</td>
						<td>{item.date}</td>
						<td>{item.HIT}</td>
						<td>{item.CREATE_ID}</td>
					</tr>
				{/each}
				</tbody>
			{/if}
		</table>
	</div>
</div>

{#if writeBol}
	<div class="modal-overlay" on:click={toggleModal} on:keypress>
		<div class="modal-content" on:click|stopPropagation on:keypress>
			<div class="radio-group">
				<input type="radio" name="group"> 일반
				<input type="radio" name="group"> 상위
				<input type="radio" name="group"> 최상위
			</div>
			<input type="text" placeholder="제목" class="input-field" />
			<div class="flex-container">
				<input type="file" class="file-input" />
				<button class="button" on:click={toggleReadValidate}>열람 가능자</button>
			</div>
			<div class="quill-container">
				<Quill />
			</div>
			<div class="modal-buttons">
				<button class="button" on:click={printContent}>저장</button>
				<button class="button" on:click={toggleModal}>닫기</button>
			</div>
		</div>
	</div>
{/if}

<ReadValidateModal showModal={readValidateBol} closeModal={toggleReadValidate} />


<style>
    .container {
        height: 90%;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
    }
    .button {
        background-color: #3b82f6;
        color: white;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .button:hover {
        background-color: #2563eb;
    }
    .table-container {
        width: 100%;
        max-height: 85vh;
        overflow-y: auto;
    }
    .table {
        width: 100%;
        border-collapse: collapse;
    }
    .table th,
    .table td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
    }
    .table th {
        background-color: #f3f4f6;
    }
    .table tbody tr:nth-child(even) {
        background-color: #f9fafb;
    }
    .table tbody tr:hover {
        background-color: #9ca3af;
    }
    #boardTitle:hover {
        cursor: pointer;
    }
    .modal-overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .modal-content {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
        height: 90%;
        display: flex;
        flex-direction: column;
    }
    .radio-group {
        margin-bottom: 20px;
    }
    .radio-group input {
        margin: 0 10px;
    }
    .input-field {
        width: 98%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .file-input {
        flex-grow: 1;
    }
    .quill-container {
        flex-grow: 1;
        height: 300px;
        margin-bottom: 20px;
    }
    .modal-buttons {
        text-align: right;
    }
</style>