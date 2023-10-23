"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} responses for ${label}/10`}</p>
      </div>
    );
  }

  return null;
};

export default function HistogramRecharts({ data }) {
  const formattedData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => ({
    name: key,
    value: data[key] || 0,
  }));

  return (
    <BarChart width={500} height={300} data={formattedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// export default function HistogramVictory({ data }) {
//   const formattedData = Object.keys(data).map((key) => ({
//     x: key,
//     y: data[key],
//   }));

//   return (
//     <VictoryChart>
//       <VictoryAxis />
//       <VictoryAxis dependentAxis />
//       <VictoryBar data={formattedData} />
//     </VictoryChart>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import * as d3 from "d3";

// export default function Histogram({ data }) {
//   useEffect(() => {
//     const svg = d3.select("#histogram");
//     svg
//       .selectAll("rect")
//       .data(Object.entries(data))
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * 40)
//       .attr("y", (d) => 200 - d[1] * 20)
//       .attr("width", 35)
//       .attr("height", (d) => d[1] * 20);
//   }, [data]);

//   return <svg id="histogram" width="500" height="200"></svg>;
// }
