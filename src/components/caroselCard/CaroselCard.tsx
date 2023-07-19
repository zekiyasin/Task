import React from "react";
import "./caroselCard.css";

import { Box } from "@atlaskit/primitives";
import Button from "@atlaskit/button";

type props = { icon: any; title: string; desc: string };

const CaroselCard = (item: props ) => {
  return (
    <li className="carosel-card" >
      <div className="icon-box">
        <Box>{item.icon}</Box>
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <Button>Ücretsiz Başlat</Button>
    </li>
  );
};

export default CaroselCard;

