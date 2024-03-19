import React from "react";
import "./ShopOwnerSidemenu.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';

export const SidemenuData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/shopownerdashboard",
  },

  {
    title: "Items",
    icon: <LocalMallIcon />,
    link: "/customer",
  },
  {
    title: "Pre Orders",
    icon: <ShoppingBagSharpIcon />,
    link: "/stores",
  },
  {
    title: "Complete Orders",
    icon: <AssignmentTurnedInSharpIcon />,
    link: "/shopOwners",
  },
];

function ShopOwnerSidemenu() {
  return (
    <div className="SOSideMenu">
      <ul className="sidebarList">
        {SidemenuData.map((val, key) => {
          return (
            <li
              key={key}
              className="sm-line"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShopOwnerSidemenu;


