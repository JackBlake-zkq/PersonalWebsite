<script>
	import Router from 'svelte-spa-router'
	import routes from './routes';
	import Navbar from './nav/Navbar.svelte';
	import Socials from './Socials.svelte';

</script>

<main>
	<Navbar/>
	<Router {routes}/>
	<Socials/>
</main>