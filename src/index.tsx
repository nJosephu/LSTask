import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { SampleEcommerce } from "./screens/SampleEcommerce";
import { store } from './store';

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <SampleEcommerce />
    </Provider>
  </StrictMode>,
);