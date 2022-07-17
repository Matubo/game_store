import { Route, Routes } from 'react-router';
import { routes } from 'src/consts/routes';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((elem) => {
        return <Route path={elem.path} element={elem.component} key={elem.path}></Route>;
      })}
    </Routes>
  );
}
