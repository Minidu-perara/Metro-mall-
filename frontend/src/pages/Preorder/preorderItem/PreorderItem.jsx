import React, { useState, useEffect } from "react";
import "./PreorderItem.css";

function PreorderItem({ preOrder }) {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getRemainingTime() {
    const addedTime = new Date(preOrder.createdAt).getTime();
    const currentTime = new Date().getTime();
    const difference = 48 * 60 * 60 * 1000 - (currentTime - addedTime);

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <div className="preorder-item">
      <div className="po-card">
        <div className="po-image">
          <img
            src={preOrder.item.imageUrls}
            alt="preorder-image"
            style={{ width: "310px", height: "auto", borderRadius: "5px" }}
          />
        </div>
        <div className="po-texts">
          <h2 className="item-name">{preOrder.item.itemName}</h2>
          <p className="item-d">Rs {preOrder.item.price}</p>
          <p className="item-d">10% Off</p>
        </div>
        <div className="third-section">
          <div className="remain-time">
            <h4>{`${remainingTime.hours
              .toString()
              .padStart(2, "0")} : ${remainingTime.minutes
              .toString()
              .padStart(2, "0")} : ${remainingTime.seconds
              .toString()
              .padStart(2, "0")}`}</h4>
          </div>
          <div className="po-cancelbtn">
            <button className="c-btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreorderItem;
