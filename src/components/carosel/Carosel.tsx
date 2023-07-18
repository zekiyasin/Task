import React from "react";
import "./carosel.css";
import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import IssuesIcon from "@atlaskit/icon/glyph/issues";
import {BsGraphUpArrow} from "react-icons/bs";
import {MdGTranslate} from "react-icons/md";
import { Box } from "@atlaskit/primitives";
import Button from "@atlaskit/button";
const Carosel = () => {
  const data = [
    {
      icon: <BsGraphUpArrow color="white" size="30" />,
      title: "Sentiment Analiz Sorgu Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <IssuesIcon primaryColor="white" size="large" label="" />,
      title: "Bots Sorgu Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <MdGTranslate color="white" size="30"  />,
      title: "Translate Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <AppSwitcherIcon primaryColor="white" size="large" label="" />,
      title: "Aspect Base Sentiment",
      desc: "Our mission is to unleash the potential in every team.",
    },
  ];

  return (
    <section className="carosel">
      <div className="carosel-container">
        <div className="carosel-text">
          <h2>Portal Live Products</h2>
          <p>
            Basit sezgisel ve güzel deneyimler oluşturmak için Portal'ın
            evrensel yazılım dilini kullanın.
          </p>
        </div>
        <ul>
          {data.map((item, index) => (
            <li className="carosel-card" key={index}>
              <div className="icon-box">
                <Box>{item.icon}</Box>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Button>Ücretsiz Başlat</Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Carosel;
