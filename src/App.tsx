import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { routes } from './consts/routes';
import MineTemplate from './pages/MineTemplate/MineTemplate';
import TestBlock from './TestBlock';

export default function App() {
  return (
    <div className="React-App">
      <BrowserRouter>
        <MineTemplate>
          <Routes>
            {routes.map((elem) => {
              return <Route path={elem.path} element={elem.component} key={elem.path}></Route>;
            })}
          </Routes>
          <Link to="/about">about</Link>
        </MineTemplate>
        <TestBlock></TestBlock>
      </BrowserRouter>
    </div>
  );
}
