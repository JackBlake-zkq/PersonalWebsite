<script>
    import { location, push } from 'svelte-spa-router';

    export let label = '';
    export let route = '';
    export let href = '';
    export let i = 0;

    const handleClick = e => {
        if(href) window.location.assign(href)
        if($location != route) push(route) 
        if(e.target.classList.contains('selected')) e.stopPropagation()
    }

    
</script>

<button class="{$location == route ? `selected` : ''}" style="color: hsl({i * 50}, 100%, 80%);"
on:click="{ handleClick }">
    {label}
</button>


<style>
    button {
        font-size: inherit;
        font-family: inherit;
        padding: 0.5rem;
        margin: 0;
        transition: opacity 0.4s;
        background-color: transparent;
        border: none;
    }
    button:hover {
        cursor: pointer;
        opacity: 80%;
    }
    .selected {
        opacity: 50%;
    }
    .selected:hover {
        cursor: default;
        opacity: 50%;
    }
</style>