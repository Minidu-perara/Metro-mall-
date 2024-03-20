import React from 'react'
import "./SOItems.css"
import SOItem from "../Item/SOItem"
import { Link } from "react-router-dom";

function SOItems() {
  return (
    <div className='SOItems'>
      <div className="head-section">
        <div className="add-btn">
          <Link to="/shopowner-dashboard/add-items">Add Items</Link>
        </div>
        <div className="srch-export">
          <input type='text' placeholder='Search'/>
          <button>Export</button>
        </div>
      </div>
      {/* body section */}
      <div className="body-sec" >
        <SOItem/>
        <SOItem/>
        <SOItem/>
        <SOItem/>
      </div>
    </div>
  )
}

export default SOItems