import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/organism/Layouts";
import "flowbite/dist/flowbite.min.css";

function App() {
  const location = useLocation();
  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/register"; // Example condition
  // const showFooter =
  //   location.pathname !== "/Login" && location.pathname !== "/Register"; // Example condition
  return (
    <>
      {showHeader && <Layout />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
