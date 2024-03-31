<script>
 import Archive from './Archive.svelte';
 import InfoTable from "./InfoTable.svelte";
 import LeaderBoard from "./LeaderBoard.svelte";
</script>
<h2>기록실</h2>
<Archive />
<h2>최근 경기</h2>
<InfoTable />
<h2>순위표</h2>
<LeaderBoard/>
<style>
    h2 {
        text-align: center;
        font-size: 24px;
        color: #4A4A4A;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
