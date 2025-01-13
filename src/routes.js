import React from "react";
import StartPage from "./pages/startPage";
import AboutMe from "./pages/aboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
