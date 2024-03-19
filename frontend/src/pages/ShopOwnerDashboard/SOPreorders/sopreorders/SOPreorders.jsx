import React from "react";
import "./SOPreorders.css";
import { Table, Button } from "antd";

function SOPreorders() {
  // Sample data for the table
  const data = [
    {
      key: "1",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
      Time: "10:50:12",
    },
    {
      key: "2",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
      Time: "10:50:12",
    },
    {
      key: "3",
      itemName: "Chicken Burger",
      customerName: "Kumara Silva",
      Time: "10:50:12",
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
    {
      title: "Time Count",
      dataIndex: "Time",
      key: "Time",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record) => (
        <div className="tbl-btn">
          <Button className="complete-btn">Complete</Button>
          <Button className="delete-btn">Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="SOPreorders">
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

export default SOPreorders;
