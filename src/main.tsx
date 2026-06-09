import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion } from "motion/react";
import App from './App.tsx';
import './index.css';

const loadFeatures = () => import("./lib/motionFeatures").then(res => res.default);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={loadFeatures} strict>
      <App />
    </LazyMotion>
  </StrictMode>,
);
