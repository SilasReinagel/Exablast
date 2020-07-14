import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';
import Services from './Pages/Services.svelte';
import About from './Pages/About.svelte';
import Work from './Pages/Work.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/services', href: '/index.html?page=services', name: 'Services', component: Services, showInMainNav: true },
  { path: '/work', href: '/index.html?page=work', name: 'Work', component: Contact, showInMainNav: true },
  { path: '/about', href: '/index.html?page=about', name: 'About', component: Contact, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
]
