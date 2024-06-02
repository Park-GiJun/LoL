<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { content } from './api/content';

	let editor;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const Quill = (await import('quill')).default;

			const quill = new Quill(editor, {
				modules: {
					toolbar: [
						[{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
						["bold", "italic", "underline", "strike"],
						[{ list: "ordered" }, { list: "bullet" }],
						[{ align: [] }],
						["clean"]
					]
				},
				theme: "snow",
				placeholder: ""
			});

			quill.on('text-change', () => {
				content.set(quill.root.innerHTML);
			});

			quill.root.innerHTML = get(content);
		}
	});
</script>

<div class="editor-wrapper">
	<div bind:this={editor} role="textbox" aria-multiline="true"></div>
</div>

<style>
    @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';

    .editor-wrapper {
        height: 400px;
    }

    p {
        margin: auto;
    }
</style>
