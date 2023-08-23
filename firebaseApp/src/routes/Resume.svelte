<script>
    import PageTransition from "../PageTransition.svelte";

</script>


<PageTransition>
    <main>
        <iframe src="https://drive.google.com/file/d/11ywQGcTBKwf3aG_s_qOQmw7jOK_ym6Bi/preview" width="640" height="480" allow="autoplay"/>
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
