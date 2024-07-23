import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/organism/Layouts";

function App() {
  const location = useLocation();

  return (
    <>
      <Layout />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
