<script>
    import { location, push } from 'svelte-spa-router';

    export let label = '';
    export let route = '';
    export let i = 0;
    
</script>


<button class="{$location == route ? `selected bg-pos-${i*100}` : ''}"
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
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: rgba(159, 204, 255, 0.3);
        cursor: pointer;

    }
    .selected {
        background-image: var(--rainbow-grad) !important;
        background-size: 300%  !important;
        -webkit-text-fill-color: var(--dark); 
        -moz-text-fill-color: var(--dark);
        color: var(--dark);
    }
    .selected:hover {
        cursor: default;
    }
    .bg-pos-0 {
	    background-position: 0% 0% !important;
    }
    .bg-pos-100 {
        background-position: -100% 0% !important;
    }
    .bg-pos-200 {
        background-position: -200% 0% !important;
    }
    .bg-pos-300 {
        background-position: -300% 0% !important;
    }
    .bg-pos-400 {
        background-position: -400% 0% !important;
    }
</style>