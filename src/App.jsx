import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/organism/Header";
import "flowbite/dist/flowbite.min.css";
import Footer from "./components/organism/Footer";

function App() {
  const location = useLocation();
  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/register"; // Example condition
  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/register"; // Example condition
  return (
    <>
      <div className="">
        {showHeader && <Header />}
        <main>
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
