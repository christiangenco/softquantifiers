"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

function stats(values) {
  values = values.sort((a, b) => a - b);
  const q1 = values[Math.floor(values.length / 4)];
  const q2 = values[Math.floor(values.length / 2)];
  const q3 = values[Math.floor((3 * values.length) / 4)];
  const min = values[0];
  const max = values[values.length - 1];

  return { min, q1, q2, q3, max };
}

export default function BoxWhiskerPlotD3({ data }) {
  const { min, q1, q2, q3, max } = calculateStats(data);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Create the box
    svg
      .append("rect")
      .attr("x", 200)
      .attr("y", q3)
      .attr("width", 50)
      .attr("height", q1 - q3)
      .attr("stroke", "black")
      .attr("fill", "none");

    // Create whiskers
    svg
      .append("line")
      .attr("x1", 225)
      .attr("y1", min)
      .attr("x2", 225)
      .attr("y2", q1)
      .attr("stroke", "black");

    svg
      .append("line")
      .attr("x1", 225)
      .attr("y1", q3)
      .attr("x2", 225)
      .attr("y2", max)
      .attr("stroke", "black");

    // Create median line (q2)
    svg
      .append("line")
      .attr("x1", 200)
      .attr("y1", q2)
      .attr("x2", 250)
      .attr("y2", q2)
      .attr("stroke", "blue");
  }, [min, q1, q2, q3, max]);

  return <svg ref={svgRef} width="500" height="500"></svg>;
}
