import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Components/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './Components/SignUp';
import Signin from './Components/SignIn';
import Details from './Components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      
    ]
  },
  {
    path: "sign-in",
    element: <Signin></Signin>,
  },
  {
    path: "sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "details/:id",
    element: <Details></Details>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
