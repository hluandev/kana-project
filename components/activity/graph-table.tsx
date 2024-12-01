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
  LabelList,
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
    <div className="bg-white p-4  overflow-hidden h-full rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{ left: 60, right: 60, bottom: 10, top: 40 }}
          data={activity}
        >
          <CartesianGrid vertical={false} stroke="#e5e5e5" />
          <XAxis
            stroke="black"
            strokeWidth={2}
            tickLine={false}
            axisLine={false}
            tickMargin={14}
            dataKey="created_at"
            tickFormatter={formatDate}
            style={{ fontSize: "20px", fontWeight: "600" }}
          />
          {/* <YAxis
            strokeWidth={2}
            stroke="black"
            style={{ fontSize: "20px", fontWeight: "600" }}
          /> */}
          <Tooltip labelFormatter={formatDate} formatter={formatTooltipValue} />
          <Line type="linear" dataKey="wins" stroke="#93c5fd" strokeWidth={4}>
            <LabelList
              dataKey="wins"
              position="top"
              offset={16}
              fontSize={24}
              fill="black"
              fontWeight={600}
            />
          </Line>
          <Line type="linear" dataKey="losses" stroke="#ff915a" strokeWidth={4}>
            <LabelList
              dataKey="losses"
              position="top"
              offset={16}
              fontSize={24}
              fill="black"
              fontWeight={600}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
