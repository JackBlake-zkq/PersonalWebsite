<script>
    export let imageURL = "";
    export let name = "Name";
    export let desc = "A description should be provided for this component";
    export let links = [];
</script>

<main>
    <img src={imageURL} alt="{name} demo"/>
    <div>
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
    <div>
        {#each links as [text, href]}
            <a href={href}>{text}</a>
        {/each}
    </div>
</main>

<style>
    main {
        width: 45vw;
        border: 2px solid var(--dark);
        border-radius: 10px;
        overflow: hidden;
        margin: 1rem;
        padding-bottom: 0.5rem;
        height: min-content;
    }
    @media(max-width: 1000px) {
        main {
            width: 80vw;
        }
    }
    img {
        width: 100%;
        height: auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    div {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    h1 {
        font-size: 1.5rem;
        color: var(--dark);
    }
    p {
        font-size: 1.1rem;
        color: var(--dark);
    }
    a {
        font-size: 0.9rem;
        margin-right: 0.5rem;
    }
</style>