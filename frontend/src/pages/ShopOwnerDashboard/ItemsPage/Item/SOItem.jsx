import React from 'react'
import "./SOItem.css"
import { Link } from 'react-router-dom'

function SOItem() {
  return (
    <div className='SOItem'>
      <div className="item-card">
        <div className="item-details">
          <p>Chicken Burger</p>
          <p>RS 1500.00</p>
        </div>
        <div className="item-btns">
          <Link to="/shopowner-dashboard/update-items" className='upd-btn'>UPDATE</Link>
          <button className='dlt-btn'>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default SOItem