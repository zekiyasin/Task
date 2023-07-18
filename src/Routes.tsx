import React from "react";
import { Route, Routes as Rotalar } from "react-router-dom";
import Home from "./pages/Home";
import Bots from "./pages/Bots";
import Sentiment from "./pages/Sentiment";

const Routes = () => {
  return (
    <div>
      <Rotalar>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler/bots" element={<Bots />} />
        <Route path="/hizmetler/sentiment" element={<Sentiment />} />
      </Rotalar>
    </div>
  );
};

export default Routes;
