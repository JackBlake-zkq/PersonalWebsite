<script>
    import { location, push } from 'svelte-spa-router';

    export let label = '';
    export let route = '';
</script>


<button class="{$location == route ? 'selected' : ''}"
on:click="{ () => { if($location != route) push(route) } }">
    {label}
</button>


<style>
    button {
        background: none;
        border: none;
        color: transparent;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        font-size: inherit;
        font-family: inherit;
        padding: 0.5rem;
        margin: 0;
    }
    button:hover {
        background: rgba(255,255,255,0.3);

    }
    .selected {
        background-image: var(--blue-green-grad);
        -webkit-text-fill-color: black; 
        -moz-text-fill-color: black;
        color: black;
    }
    .selected:hover {
        background-image: var(--blue-green-grad);
        cursor: default;
    }
</style>