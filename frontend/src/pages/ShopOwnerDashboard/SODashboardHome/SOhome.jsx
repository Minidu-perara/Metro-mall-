import React from "react";
import "./SOhome.css";
import Piechart from "./piechart/Piechart";
import TotalItems from "../../../assets/Images/sodashboard/totalItems.png";
import TotalPreOrders from "../../../assets/Images/sodashboard/totalPreorders.png";
import TotalCompleteOrders from "../../../assets/Images/sodashboard/totalCompleteorders.png";

function SOhome() {
  return (
    <div className="sohome">
      {/* first row */}
      <div className="first-row">
        <div className="first-card">
          <div className="firstcard-img">
            <img
              src={TotalItems}
              alt="first-card-image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="first-card-details">
            <p>Total Items</p>
            <p>10</p>
          </div>
        </div>
        <div className="second-card">
          <div className="secondcard-img">
            <img
              src={TotalPreOrders}
              alt="second-card-image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="second-card-details">
            <p>Total Pre Orders</p>
            <p>10</p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="second-row">
        <div className="pichart">
          <Piechart />
        </div>
        <div className="third-card">
          <div className="thirdcard-img">
            <img
              src={TotalCompleteOrders}
              alt="third-card-image"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="third-card-details">
            <p>Total Complete Orders</p>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SOhome;
