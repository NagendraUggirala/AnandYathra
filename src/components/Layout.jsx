import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="pt-18 min-h-screen bg-white">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
