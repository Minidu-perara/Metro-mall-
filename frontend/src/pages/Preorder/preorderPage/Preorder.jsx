import React from 'react'
import "./Preorder.css"
import PreorderItem from '../preorderItem/PreorderItem'

function Preorder() {
  return (
    <div className='preorder-page'>
        <h2>My Pre Orders</h2>
        <div className='preorder-item'>
            <PreorderItem/>
            <PreorderItem/>
            <PreorderItem/>
        </div>
    </div>
  )
}

export default Preorder