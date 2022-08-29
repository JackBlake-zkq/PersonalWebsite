<script>
    import PageTransition from "../PageTransition.svelte";

</script>


<PageTransition>
    <main>
        <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vQul7qITW5n34T-2O4Uxjhsvif7rmgWMOACFGCiTHiqKpNkBI_DAagOEKkd0Wof3lJFOq6KnUrA4C_U/pub?embedded=true"></iframe>
    </main>
</PageTransition>

<style>
    main {
        display: flex;
        height: calc(100vh - 5rem);
    }
    iframe {
        height: 100%;
        width: 1000px;
        margin: auto;
    }
</style>