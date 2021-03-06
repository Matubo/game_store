import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { routes } from './consts/routes';
import MineTemplate from './pages/MineTemplate/MineTemplate';
import AppRouter from './router/AppRouter';
import TestBlock from './TestBlock';

export default function App() {
  return (
    <div className="React-App">
      <BrowserRouter>
        <MineTemplate>
          <Suspense fallback={<p>Загрузка</p>}>
            <AppRouter></AppRouter>
          </Suspense>
        </MineTemplate>
        <TestBlock></TestBlock>
      </BrowserRouter>
    </div>
  );
}
