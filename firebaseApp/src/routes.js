import About from './routes/About.svelte';
import Portfolio from './routes/Portfolio.svelte';
import Contact from './routes/Contact.svelte';
import Resume from './routes/Resume.svelte';

export default {
    '/': About,
    '/portfolio': Portfolio,
    '/resume': Resume,
    '/contact': Contact
}