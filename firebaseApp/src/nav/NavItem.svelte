<script>
    import { location, push } from 'svelte-spa-router';

    export let label = '';
    export let route = '';
    export let i = 0;

    
</script>

<button class="{$location == route ? `selected` : ''}" style="color: hsl({i * 50}, 100%, 80%);"
on:click="{ (e) => { if($location != route) { push(route) } if(e.target.classList.contains('selected')){ e.stopPropagation() } } }">
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