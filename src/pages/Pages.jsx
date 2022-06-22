import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "../components/Cuisine";
import Searched from "../components/Searched";
import Home from "./Home";
import Recipe from "./Recipe";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Pages;
