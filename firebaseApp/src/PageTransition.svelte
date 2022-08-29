<script>
    import { fade } from 'svelte/transition';
</script>
  
<main in:fade="{{ duration: 150, delay: 150 }}" out:fade="{{ duration: 150 }}">
    <slot/>
</main>