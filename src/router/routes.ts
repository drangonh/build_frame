import { LoginPage } from '@/redux/react-redux-first/login';
import { Home } from './constant';

const HomeRoutes = [
  {
    path: Home.LOGIN.path,
    component: LoginPage
  },
];

export { HomeRoutes };

