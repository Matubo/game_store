import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MineTemplate from './pages/MineTemplate/MineTemplate';
import AppRouter from './router/AppRouter';
import './App.scss';
import './assets/fonts/font.css';
import loading from './assets/img/loading.gif';
import { imgErrorHandler } from './handlers/imgErrorHandler';

export default function App() {
  return (
    <div className="React-App" onError={imgErrorHandler}>
      <BrowserRouter>
        <MineTemplate>
          <Suspense
            fallback={
              <div className="app-loader">
                <img src={loading} alt="loading"></img>
              </div>
            }
          >
            <AppRouter></AppRouter>
          </Suspense>
        </MineTemplate>
      </BrowserRouter>
      <div className="app-background"></div>
    </div>
  );
}
