import React from "react";
import Home from "./pages/home/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Outlet></Outlet>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/chatBuddy",
      element: <Layout />,
      children: [
        { path: "/chatBuddy/", element: <Home /> },
        { path: "/chatBuddy/login", element: <Login /> },
        { path: "/chatBuddy/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
