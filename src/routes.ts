import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Works from './routes/Works.svelte';
import Contact from './routes/Contact.svelte';
import NotFound from './routes/NotFound.svelte';

export const routes = {
    '/': Home,
    '/about': About,
    '/portfolio': Works,
    '/portfolio/t/:tag': Works,
    '/contact': Contact,

    // TODO: Single View
    // '/portfolio/:project': Works,

    '*': NotFound,
};
