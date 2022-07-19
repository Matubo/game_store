import React, { ReactElement } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { URL } from './urls';

const { about, cart, category, home } = URL;
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage/ErrorPage'));
const CartPage = React.lazy(() => import('../pages/CartPage/CartPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage/ProguctsPage'));

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
    path: about,
    component: <AboutPage></AboutPage>,
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
