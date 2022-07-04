<script>
	import Router from 'svelte-spa-router'
	import routes from './routes';
	import Navbar from './nav/Navbar.svelte';

	let navBarHeight = 0;

</script>

<main>
	<Navbar/>
	<Router {routes}/>
</main>