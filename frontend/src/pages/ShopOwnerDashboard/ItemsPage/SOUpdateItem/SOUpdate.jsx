import React from "react";
import "./SOUpdate.css";
import upimg from "../../../../assets/Images/items/Burger.png";

function SOUpdate() {
  return (
    <div className="SOUpdate">
      <div className="topi">
        <h2>Update Item Details</h2>
      </div>
      <div className="form-section">
        <div className="in-sec">
          <label>Item Name :</label>
          <input type="text" placeholder="Item Name" />
        </div>
        <div className="in-sec">
          <label>Price (LKR) :</label>
          <input type="text" placeholder="Item Price" />
        </div>
        <div className="in-sec">
          <label>Description :</label>
          <input type="text" placeholder="Item Description" />
        </div>
        <div className="img-upld">
          <div className="file-sec">
            <input type="file" />
          </div>
          <div className="upld-btn">
            <button>UPLOAD</button>
          </div>
        </div>
        <div className="img-view">
          <div className="img-p">
            <img src={upimg} alt="" />
          </div>
          <div className="dlt-btn">
            <button>Delete</button>
          </div>
        </div>
        <div className="upd-btnn">
          <button>Update Item</button>
        </div>
      </div>
    </div>
  );
}

export default SOUpdate;
