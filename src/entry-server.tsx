import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { LazyMotion } from "motion/react";
import App from "./App";

const loadFeatures = () => import("./lib/motionFeatures").then(res => res.default);

export function render() {
  return renderToString(
    <StrictMode>
      <LazyMotion features={loadFeatures} strict>
        <App />
      </LazyMotion>
    </StrictMode>,
  );
}
