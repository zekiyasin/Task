import React, { useState } from "react";
import logo from "../../images/logo.png";

import {
  AtlassianNavigation,
  PrimaryButton,
  Search,
  Settings,
  Help,
  Notifications,
} from "@atlaskit/atlassian-navigation";
import Avatar, { AvatarItem } from "@atlaskit/avatar";

import { NotificationIndicator } from "@atlaskit/notification-indicator";

const Header = () => {
  const AtlassianProductHome = () => (
    <a href="/">
      <img src={logo} alt="logo"  height="75px" />
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
  );
};

export default Header;
