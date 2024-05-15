<script>
    import { onMount } from 'svelte';

    let menuOpen = true;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<nav class="header">
    <div class="nav-container">
        <div class="hamburger" on:click={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links {menuOpen ? 'open' : ''}">
            <li><a href="/">Main</a></li>
            <li><a href="/Matches">Matches</a></li>
            <li><a href="/Player">Player History</a></li>
            <li><a href="/TierList">Tier List</a></li>
            <li><a href="/HistoryBoard">History Board</a></li>
            <li><a href="/Board">Board</a></li>
            <li><a href="/UserRegi">User Registration</a></li>
            <li><a href="/SaveMatch">Save Match</a></li>
            <li><a href="/AutoMatch">AutoMatch</a></li>
        </ul>
    </div>
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

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
    }

    .hamburger .bar {
        width: 25px;
        height: 3px;
        background-color: #CBD5E0;
        margin: 3px 0;
        transition: 0.4s;
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
            padding: 1rem 1rem;
        }

        .nav-container {
            flex-direction: column;
            align-items: flex-start;
        }

        .hamburger {
            display: flex;
        }

        .nav-links {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            display: none;
        }

        .nav-links.open {
            display: flex;
        }

        .nav-links li {
            margin: 5px 0;
            width: 100%;
        }

        .nav-links a {
            width: 100%;
            text-align: left;
        }
    }
</style>
