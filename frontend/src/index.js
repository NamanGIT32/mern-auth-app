import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import 'react-toastify/ReactToastify.css';
import {GoogleOAuthProvider} from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Home />
  )
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:"/login",
    element:
    <GoogleOAuthProvider clientId='80116751819-t5sr3tabl583b8b8a3nomo6l08e3ln8o.apps.googleusercontent.com'><Login/></GoogleOAuthProvider>
    
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);

root.render(
    <RouterProvider router={appRouter} />
);

