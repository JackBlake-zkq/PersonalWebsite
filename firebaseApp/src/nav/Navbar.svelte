<script>
    import Dropdown from './Dropdown.svelte';
    import NavItem from './NavItem.svelte';

    function consumeEvent(evt){
        if (typeof evt.stopPropagation != "undefined") {
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true;
        }
    }

    let w;
</script>

<svelte:window bind:innerWidth={w}/>


<nav on:mousemove={consumeEvent}>
    {#if w > 640}
        <NavItem label="About" route="/" i=0/>
        <NavItem label="Portfolio" route="/portfolio" i=1/>
        <NavItem label="Contact" route="/contact" i=2/>
    {:else}
        <Dropdown>
            <h3 slot="title">☰</h3>
            <div slot="content">
                <NavItem label="About" route="/" i=0/>
                <NavItem label="Portfolio" route="/portfolio" i=1/>
                <NavItem label="Contact" route="/contact" i=2/>
            </div>
        </Dropdown>
    {/if}
</nav>
<section/>

<style>
    nav {
        position: fixed;
        background: var(--dark);
        width: 100%;
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        top: 0;
    }
    nav, section {
        height: 4rem;
    }
    div {
        width: min-content;
        background: var(--dark);
        border-radius: 0 0 0 10px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
</style>