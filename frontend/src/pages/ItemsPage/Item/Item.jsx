import React from "react";
import "./Item.css";
import BurgerImg from "../../../assets/Images/items/Burger.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Item({ item }) {
  return (
    <div className="item-page">
      <div className="item-card">
        <div className="item-img">
          <img
            src={item.imageUrls}
            alt="item-image"
            style={{ width: "260px", height: "auto" }}
          />
        </div>
        <div className="item-detail">
          <div className="item-text">
            <h3>{item.itemName}</h3>
            <p>{item.description}</p>
            <h5>RS {item.price}</h5>
          </div>
          {/* <div className="wishlist-icon" style={{ opacity: 0.6 }}>
            <FavoriteBorderIcon />
          </div> */}
        </div>
        <div className="preorder-btn">
          <button>Pre Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
