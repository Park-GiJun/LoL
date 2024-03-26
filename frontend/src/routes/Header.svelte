<script>
</script>

<nav class="header">
    <div class="logo">
        <a href="/">내전 전적</a>
    </div>
    <ul class="nav-links">
        <li><a href="/">Main</a></li>
        <li><a href="/Matches">Matches</a></li>
        <li><a href="/Player">Player History</a></li>
        <li><a href="/RecentMatch">Recent Match</a></li>
        <li><a href="/SaveMatch">Save Match</a></li>
    </ul>
</nav>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: hsl(208, 77%, 55%);
        padding: 0.5rem 1rem;
    }

    .logo a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }

    .nav-links {
        list-style: none;
    }

    .nav-links li {
        display: inline;
        margin-left: 20px;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #ddd;
    }
</style>
