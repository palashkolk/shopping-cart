import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routesConfig } from "./routes.jsx"
import './index.css'
// import App from './App.jsx'
// import Shop from './pages/Shop.jsx'
// import Home from './pages/Home.jsx'
// import Cart from './pages/Cart.jsx'

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
