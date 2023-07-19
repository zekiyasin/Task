import React from "react";
import { Route, Routes as Rotalar } from "react-router-dom";
import Home from "./pages/Home";
import Bots from "./pages/Bots";
import Sentiment from "./pages/Sentiment";
import Hizmetler from "./pages/hizmetler/Hizmetler";

const Routes = () => {
  return (
    <div>
      <Rotalar>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler/bots" element={<Bots />} />
        <Route path="/hizmetler/sentiment" element={<Sentiment />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
      </Rotalar>
    </div>
  );
};

export default Routes;
