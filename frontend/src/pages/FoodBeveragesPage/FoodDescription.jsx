import React from "react";
import bkbanner from "../../images/BurgerKingBanner.jpeg";
import "./FoodDescription.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FoodDescription = () => {
  return (
    <div>
      <div className="foodimageContainer">
        <img src={bkbanner} />
      </div>

      <div className="topiccontainer">
        <h1>BURGER KING</h1>
        <button className="viewItembutton">View Item</button>
      </div>

      <div className="descriptionContainer">
        <LocationOnIcon style={{ height: 40, width: 40 }} />
        <h2>2-FLOOR, METRO MALL, COLOMBO</h2>
      </div>

      
        <p className="paragraphcontainer">
          Every day, more than 11 million guests visit Burger King® restaurants
          around the world. And they do so because our restaurants are known for
          serving high-quality, great-tasting and affordable food. Founded in
          1954, Burger King® is the second largest fast food hamburger chain in
          the world. The original Home of the Whopper®, our commitment to
          premium ingredients, signature recipes and family-friendly dining
          experiences is what has defined our brand for more than 50 successful
          years.
          Every day, more than 11 million guests visit Burger King® restaurants
          around the world. And they do so because our restaurants are known for
          serving high-quality, great-tasting and affordable food. Founded in
          1954, Burger King® is the second largest fast food hamburger chain in
          the world. The original Home of the Whopper®, our commitment to
          premium ingredients, signature recipes and family-friendly dining
          experiences is what has defined our brand for more than 50 successful
          years.
          Every day, more than 11 million guests visit Burger King® restaurants
          around the world. And they do so because our restaurants are known for
          serving high-quality, great-tasting and affordable food. Founded in
          1954, Burger King® is the second largest fast food hamburger chain in
          the world. The original Home of the Whopper®, our commitment to
          premium ingredients, signature recipes and family-friendly dining
          experiences is what has defined our brand for more than 50 successful
          years.
        </p>
    
    </div>
  );
};

export default FoodDescription;
