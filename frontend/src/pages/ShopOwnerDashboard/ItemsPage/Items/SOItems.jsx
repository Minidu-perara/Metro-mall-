import React, { useEffect, useState } from "react";
import "./SOItems.css";
import SOItem from "../Item/SOItem";
import { Link } from "react-router-dom";
import axios from "axios";

function SOItems() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredItems = items.filter((item) => {
      return item.itemName.toLowerCase().includes(searchQuery);
    });
    setFilteredItems(filteredItems);
  };

  const itemsToDisplay = filteredItems.length > 0 ? filteredItems : items;

  return (
    <div className="SOItems">
      <div className="head-section">
        <div className="add-btn">
          <Link to="/shopowner-dashboard/add-items">Add Items</Link>
        </div>
        <div className="srch-export">
          <input
            type="text"
            placeholder="Search"
            name="searchQuery"
            onChange={handleSearch}
          />
          <button>Export</button>
        </div>
      </div>
      {/* body section */}
      <div className="body-sec">
        {itemsToDisplay.map((item) => (
          <SOItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default SOItems;
