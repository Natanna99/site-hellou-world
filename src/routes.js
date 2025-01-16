import React from "react";
import StartPage from "./pages/startPage";
import AboutMe from "./pages/aboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import { Footer } from "./components/footer";
import BodyPage from "./components/bodyPage";
import Post from "./pages/post";
import Error404 from "./pages/error404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<BodyPage />}>
          <Route index element={<StartPage />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<Error404 />} />
        <Route path="posts/:id/*" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
