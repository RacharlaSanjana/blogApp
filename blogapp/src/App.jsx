import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import Errorpage from './pages/Errorpage';
import { useContext } from 'react';
import { Context } from './context/Context';
import Contact from './pages/contact/Contact';

const Dashboard = () => (
  <div>
    <Topbar />
    <Outlet />
  </div>
);

const App = () => {
  const {user}=useContext(Context);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element:user? <Home/>:<Login />,
        },
        {
          path: "/register",
          element:user? <Home/>:<Register />,
        },
        {
          path: "/write",
          element:user? <Write />:<Register/>,
        },
        {
          path: "/settings",
          element: user?<Settings />:<Register/>,
        },
        {
          path: "/contact",
          element:<Contact/>,
        },
        
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "*",
          element: <Errorpage />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
