import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Portafolio from "../pages/Portafolio";
import NotFound from "../pages/NotFound";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/portafolio" element={<Portafolio />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
