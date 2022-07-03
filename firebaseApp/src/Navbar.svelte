<script>
    import { location, push } from 'svelte-spa-router';
</script>

<nav>
    <div>

        <button class="{$location == '/' ? 'selectedRoute' : ''}"
        on:click="{ () => { if($location != '/') push('/') } }">
            Home
        </button>

        <button class="{$location == '/aboutMe' ? 'selectedRoute' : ''}"
        on:click="{ () => { if($location != '/aboutMe') push('/aboutMe') } }">
            About Me
        </button>

        <button class="{$location == '/portfolio' ? 'selectedRoute' : ''}"
        on:click="{ () => { if($location != '/portfolio') push('/portfolio') } }">
            Portfolio
        </button>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        background: var(--dark);
        width: 100%;
        z-index: 1;
    }
    div {
        float: right;
        display: flex;
        background-color: var(--light);
        background-image: var(--rainbow-grad);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        margin: 5px;
    }
    button {
        background: none;
        border: none;
        color: transparent;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        font-size: inherit;
        font-family: inherit;
        margin: 5px;
    }
    button:hover {
        text-shadow: 0 0 rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
    .selectedRoute {
        text-shadow: 0 0 rgba(0, 0, 0, 0.5);
    }
    .selectedRoute:hover {
        text-shadow: 0 0 rgba(0, 0, 0, 0.5);
        cursor: default;
    }
</style>