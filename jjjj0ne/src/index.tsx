import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceEnterAgent from './page/ServiceEnterAgent';
import { ThemeProvider } from "@material-tailwind/react";
import LoginPage from './page/LoginPage';
import Laboratoire from './page/Laboratoire';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider><App /></ThemeProvider>,
  },
  {
    path: "enter-agent",
    element: <ThemeProvider><ServiceEnterAgent /></ThemeProvider>,
  },
  {
    path: "login",
    element: <ThemeProvider><LoginPage/></ThemeProvider>,
  },
  {
    path: "laboratoire",
    element: <ThemeProvider><Laboratoire/></ThemeProvider>,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
