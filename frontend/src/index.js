import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import 'react-toastify/ReactToastify.css';
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
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);

root.render(
    <RouterProvider router={appRouter} />
);

