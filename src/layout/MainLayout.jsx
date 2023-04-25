import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeCarousel from "../pages/Home/HomeCarousel";
import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <div className="MainLayout flex flex-col h-full">
      <Header />
      <HomeCarousel />
      <div className="MainContent flex-1 min-h-screen">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
