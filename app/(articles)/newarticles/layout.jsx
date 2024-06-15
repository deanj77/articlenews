import React from "react";
import NavBar from "@/app/components/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 h-screen text-white">{children}</div>
    </div>
  );
};

export default Layout;
