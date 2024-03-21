import React from "react";
import bk from "../../images/buregrking.jpeg";
import mac from "../../images/macdonalds.jpeg";
import kfc from "../../images/kfc.jpeg";
import subway from "../../images/subway.jpeg";
import pizzahut from "../../images/pizzahut.jpeg";
import teatung from "../../images/teatung.jpeg";
import creeprunner from "../../images/creeprunner.jpeg";
import bubbleme from "../../images/bubbleme.jpeg";
import magiccorn from "../../images/magiccorn.jpeg";
import wafel from "../../images/wafel.jpeg";
import "./FoodBeverages.css";
import { Link } from "react-router-dom";

const FoodBeverages = () => {
  return (
    <div>
      <div
        style={{
          height: 180,
          textAlign: "center",
          padding: 80,
          fontFamily: "calibri",
          color:"#031144",
          fontStyle:"bold"
        }}>
        <h1>FOOD AND BEVERAGES</h1>
      </div>
      <div className="cardContainer">
      <Link to={'/fooddescription'}>
        <div className="card">
          <div className="imageContainer">
            <img src={bk} />
          </div>
        </div>
        </Link>
        <div className="card">
          <div className="imageContainer">
            <img src={mac} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={kfc} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={subway} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={pizzahut} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={teatung} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={bubbleme} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={magiccorn} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={creeprunner} />
          </div>
        </div>
        <div className="card">
          <div className="imageContainer">
            <img src={wafel} />
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  );
};

export default FoodBeverages;
