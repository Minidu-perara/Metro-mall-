import React from "react";
import "./SOCompleteOrders.css";
import { Table, Button } from "antd";

function SOCompleteOrders() {
  // Sample data for the table
  const data = [
    {
      key: "1",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
    },
    {
      key: "2",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
    },
    {
      key: "3",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
    },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
      align: "center",
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
      align: "center",
    },
  ];

  return (
    <div className="SOCompleteOrders">
      <div className="head-section">
        <div className="srch-export">
          <input type="text" placeholder="Search" />
          <button>Export</button>
        </div>
      </div>
      {/* body */}
      <div className="body-sec">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          footer={() => (
            <div className="footer-number">{`Total ${data.length} items`}</div>
          )}
        />
      </div>
    </div>
  );
}

export default SOCompleteOrders;
