<script>
	import Router from 'svelte-spa-router'
	import routes from './routes';
	import Navbar from './Navbar.svelte';

</script>

<main>
	<Navbar/>
	<Router {routes}/>
</main>