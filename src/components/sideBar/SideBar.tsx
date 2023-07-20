import React from "react";
import "./sideBar.css";

import { ButtonItem } from "@atlaskit/side-navigation";

import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import IssuesIcon from "@atlaskit/icon/glyph/issues";
import EmojiKeyboardIcon from "@atlaskit/icon/glyph/emoji/keyboard";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { Box } from "@atlaskit/primitives";

const SideBar = () => {
  const data = [
    {
      icon: <IssuesIcon primaryColor="#1c3257" size="medium" label="" />,
      title: "Bots",
      loc: "/hizmetler/bots",
    },
    {
      icon: <MdGTranslate color="#1c3257" size="20" />,
      title: "Translate",
      loc: "/hizmetler/translate",
    },
    {
      icon: <BsGraphUpArrow color="#1c3257" size="20" />,
      title: "Sentiment",
      loc: "/hizmetler/sentiment",
    },

    {
      icon: <AppSwitcherIcon primaryColor="#1c3257" size="medium" label="" />,
      title: "Aspect Base Sentiment",
      loc: "/hizmetler/aspect",
    },
    {
      icon: <EmojiKeyboardIcon primaryColor="#1c3257" size="medium" label="" />,
      title: "Text Analysis",
      loc: "/hizmetler/textanalysis",
    },
  ];

  return (
    <div className="side-container">
      <div className="sidebar">
        <h2>Hizmetlerimiz</h2>

        <div className="side-section">
          {data.map((item, index) => (
            <ButtonItem>
              <a href={item.loc} className="button-icon">
                <Box>{item.icon}</Box>
                <h3>{item.title}</h3>
              </a>
            </ButtonItem>
          ))}
        </div>
      </div>
      <div className="dikey" />
    </div>
  );
};

export default SideBar;
