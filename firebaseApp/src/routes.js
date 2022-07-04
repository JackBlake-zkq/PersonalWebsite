import InteractiveWelcome from './routes/InteractiveWelcome.svelte'
import About from './routes/About.svelte'
import Portfolio from './routes/Portfolio.svelte'
import Contact from './routes/Contact.svelte'

export default {
    '/': InteractiveWelcome,
    '/about': About,
    '/portfolio': Portfolio,
    '/contact': Contact
}