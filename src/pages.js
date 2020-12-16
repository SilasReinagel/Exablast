import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';
import Services from './Pages/Services.svelte';
import About from './Pages/About.svelte';
import Projects from './Pages/Projects.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/about', href: '/index.html?page=about', name: 'About', component: About, showInMainNav: true },
  { path: '/services', href: '/index.html?page=services', name: 'Services', component: Services, showInMainNav: true },
  { path: '/projects', href: '/index.html?page=projects', name: 'Projects', component: Projects, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
]
