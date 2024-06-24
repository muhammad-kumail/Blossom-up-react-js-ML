import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function SkillChart({ data }) {
  const { height, width } = useWindowDimensions();
  console.log("🚀 ~ SkillChart ~ width:", width);
  const skillLevel = (value) => {
    if (value === 2) return "Low";
    if (value === 4) return "Mod";
    if (value === 6) return "High";
    return "";
  };
  const formatTooltip = (value) => {
    return skillLevel(value);
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray=" 3" />
        <XAxis
          dataKey="name"
          angle={width > 1140 ? 0 : -25}
          style={{ fontSize: width > 1390 ? "14px" : "6px" }}
        />
        <YAxis tickFormatter={skillLevel} domain={[0, 8]} />
        <Tooltip
          cursor={{ fill: "transparent" }}
          formatter={formatTooltip}
          labelStyle={{ color: "black" }}
        />
        <Legend wrapperStyle={{ color: "black" }} />
        <Bar dataKey="Skill" fill="#8884d8" />
        <Bar dataKey="Interest" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
