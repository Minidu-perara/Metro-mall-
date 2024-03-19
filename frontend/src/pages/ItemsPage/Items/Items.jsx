import React from 'react'
import "./Items.css"
import Item from "../Item/Item"

function Items() {
  return (
    <div className='items-page'>
        <h2>BURGER KING</h2>
        <div className="items-search">
          <input type='text' placeholder='search'/>
        </div>
        <div className="all-items">
          <Item/>
        </div>
    </div>
  )
}

export default Items