<script>
    import { httpsCallable } from '@firebase/functions';
    import { functions } from '../firebase';
    import { sent } from '../stores';
    import Loader from '../utilities/Loader.svelte';
    const emailMe = httpsCallable(functions, 'emailMe');

    const info = {
        name: '',
        email: '',
        msg: ''
    }
    let err = '';
    let loading = false;
    $: disabled = !info.name || !info.email.match(/^.+@.+\..+$/) || !info.msg;

    function sendMail() {
        if(disabled || $sent || loading) return;
        loading = true;
        emailMe(info)
        .then(res => { 
            if(res.data === true) 
                sent.set(true)
            else
                err = 'An unknown error occured'
        })
        .catch(error => {
            err = error.message;
        })
        .finally(() => loading = false);
    }
</script>

<main>
    <div class="absoluteCenter">
        <h1 class="text-center">Contact Me</h1>
        <p>I'm interested in high impact web development projects, either virtually or in the Madison area. Looking forward to getting in touch!</p>
        {#if !$sent}
            <form on:submit|preventDefault={sendMail}>
                <input type="text" placeholder="Name" 
                    bind:value={info.name}>
                <input type="text" placeholder="Email" 
                    bind:value={info.email}>
                <textarea placeholder="Message"
                    bind:value={info.msg} rows=3></textarea>
                <button type="submit" class={disabled ? 'disabled' : ''}>Send</button>
                <p>Clicking "Send" will send me an email with your message and cc you 😁</p>
            </form>
            {#if err}
                <h3>{err}</h3>
            {/if}
        {:else}
            <p>🙌 Message sent! 🎉</p>
        {/if}
    </div>
    {#if loading}
        <Loader/>
    {/if}
</main>

<style>
    main {
        width: 100%;
    }
    main div {
        width: 50%;
    }
    @media(max-width: 640px) {
        main div {
            width: 90%;
        }
    }
    h1, p {
        color: var(--dark);
        text-align: center;
        font-family: inherit;
    }
    input, textarea, button {
        display: block;
        font-size: inherit;
        font-family: inherit;
        color: var(--dark);
        width: 100%;
    }
    input, textarea {
        background: var(--bg);
        border: 3px solid var(--dark);
        padding: 0.5rem;
        width: 100%;
        box-sizing: border-box;
    }
    input {
        border-bottom: none;
    }
    input:last-of-type {
        border-top: 1px solid gray;
    }
    input:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    textarea {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: 1px solid gray;
        resize: none;
        
    }
    button {
        border: none;
        border-radius: 5px;
        margin-top: 0.5rem;
        background: var(--dark);
        color: var(--light);
    }
    button:hover{
        opacity: 0.9;
    }
    h3 {
        color: red;
        font-size: inherit;
        text-align: center;
    }
    .disabled:hover {
        cursor: not-allowed;
        opacity: 1;
    }
    form p {
        font-size: 0.9rem;
    }
</style>