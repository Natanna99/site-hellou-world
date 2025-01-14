import React from "react";
import StartPage from "./pages/startPage";
import AboutMe from "./pages/aboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import { Footer } from "./components/footer";
import BodyPage from "./components/bodyPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<BodyPage />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
