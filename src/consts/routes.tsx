import React, { ReactElement } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { routesURL } from './routesURL';

const { cart, category, home, user } = routesURL;
const ErrorPage = React.lazy(() => import('../pages/ErrorPage/ErrorPage'));
const CartPage = React.lazy(() => import('../pages/CartPage/CartPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage/ProguctsPage'));
const UserPage = React.lazy(() => import('../pages/UserPage/UserPage'));

interface IRoute {
  path: string;
  component: ReactElement;
  exact: boolean;
}

export const routes: IRoute[] = [
  {
    path: home,
    component: <HomePage></HomePage>,
    exact: false
  },
  {
    path: user,
    component: <UserPage></UserPage>,
    exact: false
  },
  {
    path: '*',
    component: <ErrorPage></ErrorPage>,
    exact: false
  },
  { path: category, component: <ProductsPage></ProductsPage>, exact: true },
  {
    path: cart,
    component: <CartPage></CartPage>,
    exact: false
  }
];
