import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { LazyMotion } from "motion/react";
import App from './App.tsx';
import './index.css';

const loadFeatures = () => import("./lib/motionFeatures").then(res => res.default);

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <LazyMotion features={loadFeatures} strict>
      <App />
    </LazyMotion>
  </StrictMode>
);

if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
