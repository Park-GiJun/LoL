<script>
    import Header from "./Header.svelte";
</script>
<div class="slot-container">
<Header/>
    <slot/>
</div>

<style>
    .slot-container {
        padding: 10px;
        border-radius: 5px;
    }
</style>
