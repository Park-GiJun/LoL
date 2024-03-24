<script>
    let today = new Date().toISOString().split('T')[0];
</script>

<input type="date" value={today} max={today} />

<!--{#if selectedDate}-->
<!--    <p>선택된 날짜: {selectedDate}</p>-->
<!--{/if}-->

<style>
    input[type="date"] {
        margin: 0.5rem 0;
        padding: 0.25rem;
    }

    /*p {*/
    /*    margin-top: 1rem;*/
    /*}*/
</style>

