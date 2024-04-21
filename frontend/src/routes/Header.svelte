<script>
</script>

<nav class="header">
    <ul class="nav-links">
        <li><a href="/">Main</a></li>
        <li><a href="/Matches">Matches</a></li>
        <li><a href="/Player">Player History</a></li>
        <li><a href="/TierList">Tier List</a></li>
        <li><a href="/UserRegi">User Registration</a></li>
        <li><a href="/SaveMatch">Save Match</a></li>
        <li><a href="/AutoMatch">AutoMatch</a></li>
    </ul>
</nav>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3492e5;
        padding: 0.5rem 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border-radius: 8px;
    }


    .nav-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .nav-links li {
        padding: 0 20px;
    }

    .nav-links a {
        color: #CBD5E0;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
        padding: 10px 5px;
        border-bottom: 3px solid transparent;
    }

    @media (max-width: 1024px) {
        .header {
            flex-direction: column;
            padding: 1rem 1rem;
        }

        .nav-links {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .nav-links li {
            margin: 3px 0;
            width: 100%;
        }

        .nav-links a {
            width: 100%;
            text-align: center;
        }
    }
</style>
