import { usePlayerStore } from "@/stores/usePlayerStore";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const GraphTable = () => {
  const { activity } = usePlayerStore();

  return (
    <div className="bg-white  pt-10 pb-6 pr-10 h-full rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activity}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="wins"
            stroke="#8884d8"
            activeDot={{ r: 10 }}
          />
          <Line type="monotone" dataKey="losses" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
