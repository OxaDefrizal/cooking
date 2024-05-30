import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/NavigationBar";
import Footer from "./component/FooterBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
