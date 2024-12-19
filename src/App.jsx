import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import Crew from "./components/Crew.jsx";
import Technology from "./components/Technology.jsx";
import Destination from "./components/Destination.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;
