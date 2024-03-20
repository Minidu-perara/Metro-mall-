import React from "react";
import "./SOAddItem.css";

function SOAddItem() {
  return (
    <div className="SOAddItem">
      <div className="topic">
        <h2>Add Item Details</h2>
      </div>
      <div className="form-section">
        <div className="item-name">
          <label>Item Name :</label>
          <input type="text" placeholder="Item Name" />
        </div>
        <div className="item-name">
          <label>Item Price :</label>
          <input type="text" placeholder="Item Price" />
        </div>
        <div className="item-name">
          <label>Item Description :</label>
          <input type="text" placeholder="Item Description" />
        </div>
        <div className="item-img">
          <label>Item Image :</label>
          <input type="file" />
        </div>
        <button className="add-item-btn">Add Item</button>
      </div>
    </div>
  );
}

export default SOAddItem;
