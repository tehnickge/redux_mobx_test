import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { Links } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import TestComponent from "./components/header/components/TestComponent/TestComponent";
import { Provider } from "react-redux";
import { setupStore } from "./store/redux/store/store";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <TestComponent links={Links.links}></TestComponent>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
