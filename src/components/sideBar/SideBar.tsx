import React from "react";
import "./sideBar.css";

import {
  ButtonItem,
  NavigationContent,
  NavigationHeader,
  Section,
  SideNavigation,
} from "@atlaskit/side-navigation";

import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import IssuesIcon from "@atlaskit/icon/glyph/issues";
import EmojiKeyboardIcon from '@atlaskit/icon/glyph/emoji/keyboard'
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
    }

  ];

  return (
    <div className="sidebar">
      <SideNavigation label="project">
        <NavigationHeader>
          <h3 className="side-tite">Hizmetlerimiz</h3>
        </NavigationHeader>
        <NavigationContent showTopScrollIndicator>
          <Section>
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
            
          </Section>
        </NavigationContent>
      </SideNavigation>
    </div>
  );
};

export default SideBar;
