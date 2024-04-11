import React, { useEffect, useState } from "react";
import "./SOItems.css";
import SOItem from "../Item/SOItem";
import { Link } from "react-router-dom";
import axios from "axios";

function SOItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get("/api/item/getAllItems");
        setItems(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div className="SOItems">
      <div className="head-section">
        <div className="add-btn">
          <Link to="/shopowner-dashboard/add-items">Add Items</Link>
        </div>
        <div className="srch-export">
          <input type="text" placeholder="Search" />
          <button>Export</button>
        </div>
      </div>
      {/* body section */}
      <div className="body-sec">
        {items && items.map((item) => <SOItem item={item} key={item._id} />)}
      </div>
    </div>
  );
}

export default SOItems;
