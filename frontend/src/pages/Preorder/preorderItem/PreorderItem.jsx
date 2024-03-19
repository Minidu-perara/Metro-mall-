import React from 'react'
import "./PreorderItem.css"
import poimage from "../../../assets/Images/preorder/Iphone.jpg"

function PreorderItem() {
  return (
    <div className='preorder-item'>
        <div className="po-card">
            <div className="po-image">
                <img src={poimage} alt='preorder-image' style={{ width: '310px', height: 'auto' }}/>
            </div>
            <div className="po-texts">
                <h2 className='item-name'>I Phone 14 Pro Max</h2>
                <p className='item-d'>Rs.3,40 000.00</p>
                <p className='item-d'>10% Off</p>
            </div>
            <div className="third-section">
                <div className="remain-time">
                    <h4>10 : 56 : 12</h4>
                </div>
                <div className="po-cancelbtn">
                    <button className='c-btn'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreorderItem