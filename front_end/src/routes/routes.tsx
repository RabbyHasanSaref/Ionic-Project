import Home from '../pages/Home';
import About from '../pages/About';
import Setting from '../pages/Setting';
import Menu from '../components/Menu';
import SaveArticle from '../pages/SaveArticle';
import EditProfile from '../pages/EditProfile';
import Notification from '../pages/Notification';
import Search from '../pages/Search';

export interface AppRoute {
  path: string;
  exact?: boolean;
  component: React.FC;
}

export const routes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/about', component: About },
  { path: '/settings', component: Setting },
  { path: '/menu', component: Menu },
  { path: '/saved-articles', component: SaveArticle },
  { path: '/edit-profile', component: EditProfile },
  { path: '/notification', component: Notification },
  { path: '/Search', component: Search },
];
