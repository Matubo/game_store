import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MineTemplate from './pages/MineTemplate/MineTemplate';
import AppRouter from './router/AppRouter';
import TestBlock from './TestBlock';
import './App.scss';
import './assets/fonts/font.css';
import loading from './assets/img/loading.gif';

export default function App() {
  return (
    <div className="React-App">
      <BrowserRouter>
        <MineTemplate>
          <Suspense
            fallback={
              <div className="app-loader">
                <img src={loading}></img>
              </div>
            }
          >
            <AppRouter></AppRouter>
          </Suspense>
        </MineTemplate>
        <TestBlock></TestBlock>
      </BrowserRouter>
      <div className="app-background"></div>
    </div>
  );
}
