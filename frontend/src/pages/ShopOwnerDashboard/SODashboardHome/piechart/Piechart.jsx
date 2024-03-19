import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./Piechart.css";

function Piechart() {
  const data = [
    { name: "Total Items", value: 10 },
    { name: "Total Pre Orders", value: 10 },
    { name: "Total Complete Orders", value: 10 },
  ];

  const COLORS = [
    "#ffc000", //yellow Total Items
    "#4472c4", //green color Total Pre Orders
    "#ed7d31", //red color Total Complete Orders
  ];

  return (
    <div className="pchrt">
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={0}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
