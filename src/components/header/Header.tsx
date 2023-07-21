import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./header.css";

import { AiFillCloseCircle } from "react-icons/ai";
import {
  AtlassianNavigation,
  PrimaryButton,
  Search,
  Settings,
  Help,
  Notifications,
  AppSwitcher,
} from "@atlaskit/atlassian-navigation";
import { useLocation } from "react-router";
import Avatar, { AvatarItem } from "@atlaskit/avatar";

import { NotificationIndicator } from "@atlaskit/notification-indicator";

const Header = () => {
  const url = decodeURI(useLocation().pathname);
  const categories = [
    {
      id: 1,
      name: "AnaSayfa",
      path: "/",
    },
    {
      id: 2,
      name: "Hizmetler",
      path: "/hizmetler",
    },
    {
      id: 3,
      name: "Pakeler",
      path: "/paketler",
    },
    {
      id: 4,
      name: "Ürünler",
      path: "/ürünler",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      return;
    }

    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };

  const DefaultAppSwitcher = () => (
    <AppSwitcher onClick={toggleMenu} tooltip="Switch to..." />
  );

  const AtlassianProductHome = () => (
    <a className="logo" href="/">
      <img src={logo} alt="logo" height="65px" />
    </a>
  );
  const DefaultSettings = () => <Settings tooltip="Product settings" />;
  const NotificationsBadge = () => (
    <NotificationIndicator
      onCountUpdated={console.log}
      notificationLogProvider={Promise.resolve({}) as any}
    />
  );
  const DefaultProfile = () => (
    <AvatarItem
      avatar={<Avatar presence="online" />}
      primaryText="Glomil"
      secondaryText="glml@glomil.com"
    />
  );
  const DefaultSearch = () => {
    const [value, setValue] = useState("");
    const onChange = (event: any) => {
      console.log("search clicked with value: ", event.target.value);
      setValue(event.target.value);
    };

    return (
      <Search
        onClick={onChange}
        placeholder="Search..."
        tooltip="Search"
        label="Search"
        value={value}
      />
    );
  };

  return (
    <div>
      <div className="header-992">
        <AtlassianNavigation
          label="site"
          renderSearch={DefaultSearch}
          renderSettings={DefaultSettings}
          renderProfile={DefaultProfile}
          renderNotifications={() => (
            <Notifications badge={NotificationsBadge} tooltip="Notifications" />
          )}
          renderHelp={() => <Help tooltip="Get help" />}
          primaryItems={[
            <PrimaryButton href="/">Anasayfa</PrimaryButton>,
            <PrimaryButton href="/hizmetler">Hizmetler</PrimaryButton>,
            <PrimaryButton href="/paketler">Paketler</PrimaryButton>,
            <PrimaryButton href="ürünler">Ürünler</PrimaryButton>,
          ]}
          renderProductHome={AtlassianProductHome}
        />
      </div>
      <div className="header-768">
        <AtlassianNavigation
          label="site"
          renderProfile={DefaultProfile}
          primaryItems={[
            <PrimaryButton href="/">Anasayfa</PrimaryButton>,
            <PrimaryButton href="/hizmetler">Hizmetler</PrimaryButton>,
            <PrimaryButton href="/paketler">Paketler</PrimaryButton>,
            <PrimaryButton href="ürünler">Ürünler</PrimaryButton>,
          ]}
          renderProductHome={AtlassianProductHome}
        />
      </div>

      <div className="header-600">
        <AtlassianNavigation
          label="site"
          renderAppSwitcher={DefaultAppSwitcher}
          primaryItems={[]}
          renderProductHome={AtlassianProductHome}
        />
      </div>
      <div data-menu-open={showMenu} className="menu">
        <div className="menu-close">
          <button className="btn-cls" onClick={toggleMenu}>
            <AiFillCloseCircle className="close-btn" />
          </button>
        </div>
        <ul onClick={toggleMenu} className="ham-liste">
          {categories.map((item, index) => (
            <li className="ham-el" key={index}>
              <a
                data-active={url === `${item.path}`}
                className="transition-colors hover:text-green-400"
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
