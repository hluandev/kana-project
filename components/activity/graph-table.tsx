import { usePlayerStore } from "@/stores/usePlayerStore";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface GraphTableProps {
  highestHandsTable: boolean;
}

export const GraphTable = ({ highestHandsTable }: GraphTableProps) => {
  const { activity } = usePlayerStore();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTooltipValue = (value: number, name: string) => {
    const label = name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return [`${value}`, label];
  };

  return (
    <div className="bg-white border border-black/15 shadow-sm p-4 w-full  overflow-hidden h-full rounded-2xl">
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
            style={{ fontSize: "18px", fontWeight: "400" }}
          />
          {/* <YAxis
            strokeWidth={2}
            stroke="black"
            style={{ fontSize: "20px", fontWeight: "600" }}
          /> */}
          <Tooltip labelFormatter={formatDate} formatter={formatTooltipValue} />
          <Line
            type="monotone"
            dataKey={highestHandsTable ? "wins" : "highest_hand"}
            stroke={highestHandsTable ? "#93c5fd" : "#efcb68"}
            strokeWidth={4}
          >
            <LabelList
              dataKey={highestHandsTable ? "wins" : "highest_hand"}
              position="top"
              offset={16}
              fontSize={24}
              fill="black"
              fontWeight={600}
            />
          </Line>
          {highestHandsTable && (
            <Line
              type="monotone"
              dataKey="losses"
              stroke="#ff915a"
              strokeWidth={4}
            >
              <LabelList
                dataKey="losses"
                position="top"
                offset={16}
                fontSize={24}
                fill="black"
                fontWeight={600}
              />
            </Line>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
