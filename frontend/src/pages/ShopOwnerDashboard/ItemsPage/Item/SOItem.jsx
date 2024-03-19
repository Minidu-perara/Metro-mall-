import React from 'react'
import "./SOItem.css"

function SOItem() {
  return (
    <div className='SOItem'>
      <div className="item-card">
        <div className="item-details">
          <p>Chicken Burger</p>
          <p>RS 1500.00</p>
        </div>
        <div className="item-btns">
          <button className='upd-btn'>UPDATE</button>
          <button className='dlt-btn'>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default SOItem