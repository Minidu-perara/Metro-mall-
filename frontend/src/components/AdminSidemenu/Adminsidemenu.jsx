import React from "react";
import "./Adminsidemenu.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";

export const SidemenuData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },

  {
    title: "Customers",
    icon: <AccountBoxIcon />,
    link: "/customer",
  },
  {
    title: "Stores",
    icon: <StoreIcon />,
    link: "/stores",
  },
  {
    title: "Shop Owners",
    icon: <GroupsIcon />,
    link: "/shopOwners",
  },
];

function Sidemenu() {
  return (
    <div className="SideMenu">
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

export default Sidemenu;
