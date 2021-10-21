import { LoginPage } from '@/redux/react-redux-second/login';
import { Home } from './constant';

const HomeRoutes = [
  {
    path: Home.LOGIN.path,
    component: LoginPage
  },
];

export { HomeRoutes };

