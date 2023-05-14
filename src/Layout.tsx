import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-screen dark:bg-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
