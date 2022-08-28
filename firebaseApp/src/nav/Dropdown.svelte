

<main>
    <slot></slot>
</main>

<script>
    import { onMount, onDestroy } from 'svelte'
    
    let isOpen = false;
    import { slide } from 'svelte/transition';

    function close() {
        isOpen = false;
    }
    onMount(() => document.body.addEventListener('click', close));
    onDestroy(() => document.body.removeEventListener('click', close))
</script>

<button aria-expanded={isOpen} on:click|stopPropagation={() => isOpen = !isOpen}>
    <span class="inline-block">
        <slot name="title">Title</slot>
    </span>
</button>

{#if isOpen}
<div transition:slide|local={{ duration: 300}} on:click|stopPropagation>
    <slot name="content">Content</slot>
</div>
{/if}

<style>
    button {
        position: relative;
        height: 4rem;
        background-color: transparent;
        border: none;
        color: var(--light);
        padding-left: 1rem;
        padding-right: 1rem;
    }
    div {
        position: absolute;
        top: 4rem;
    }
</style>