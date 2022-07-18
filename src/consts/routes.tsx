interface IRoute {
  path: string;
  component: React.ReactNode;
  exact: boolean;
}

export const routes: IRoute[] = [
  {
    path: 'home',
    component: <div>home</div>,
    exact: false
  },
  {
    path: 'about',
    component: <p>about</p>,
    exact: false
  },
  {
    path: 'error',
    component: <p>error</p>,
    exact: false
  },
  { path: 'category/:platforms', component: <p>category {window.location.href}</p>, exact: true },
  {
    path: 'cart',
    component: <p>cart</p>,
    exact: false
  }
];
