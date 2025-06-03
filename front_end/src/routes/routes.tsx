import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

export interface AppRoute {
  path: string;
  exact?: boolean;
  component: React.FC;
}

export const routes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];
