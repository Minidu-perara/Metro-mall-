import React from 'react'
import "./SOItems.css"
import SOItem from "../Item/SOItem"

function SOItems() {
  return (
    <div className='SOItems'>
      <div className="head-section">
        <div className="add-btn">
          <button>Add Items</button>
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