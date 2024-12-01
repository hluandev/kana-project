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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTooltipValue = (value: number, name: string) => {
    // Capitalize the first letter of the metric name
    const label = name.charAt(0).toUpperCase() + name.slice(1);
    return [`${value}`, label];
  };

  return (
    <div className="bg-white  pt-8 pb-10 overflow-hidden pr-8 h-full rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activity}>
          <XAxis
            dy={14}
            padding={{ right: 10 }}
            dataKey="created_at"
            tickFormatter={formatDate}
          />
          <YAxis />
          <Tooltip labelFormatter={formatDate} formatter={formatTooltipValue} />
          <Line
            type="linear"
            dataKey="wins"
            stroke="#93c5fd"
            activeDot={{ r: 10 }}
          />
          <Line type="linear" dataKey="losses" stroke="#ff915a" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
