import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Main Page/MainPage';
import Shopping from './ShopPage/Shop1/Shopping';
import LoginPage from './Login/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "Shop",
        element: <Shopping/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },

    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

