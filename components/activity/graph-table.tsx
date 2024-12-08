import { usePlayerStore } from "@/stores/usePlayerStore";
import { Loader2Icon } from "lucide-react";
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
  loading?: boolean;
}

export const GraphTable = ({ highestHandsTable, loading }: GraphTableProps) => {
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
    <div className="bg-white border border-black/10 shadow-sm p-4 w-full  overflow-hidden h-full rounded-2xl">
      {loading ? (
        <div className="flex justify-center h-full items-center">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
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
              style={{ fontSize: "14px", fontWeight: "400" }}
            />
            {/* <YAxis
            strokeWidth={2}
            stroke="black"
            style={{ fontSize: "20px", fontWeight: "600" }}
          /> */}
            <Tooltip
              labelFormatter={formatDate}
              formatter={formatTooltipValue}
            />
            <Line
              type="monotone"
              dataKey={highestHandsTable ? "wins" : "highest_score"}
              stroke={highestHandsTable ? "#2563eb" : "#efcb68"}
              strokeWidth={2}
            >
              <LabelList
                dataKey={highestHandsTable ? "wins" : "highest_score"}
                position="top"
                offset={16}
                fontSize={18}
                fill="black"
                fontWeight={600}
              />
            </Line>
            {highestHandsTable && (
              <Line
                type="monotone"
                dataKey="losses"
                stroke="#ef4444"
                strokeWidth={2}
              >
                <LabelList
                  dataKey="losses"
                  position="top"
                  offset={16}
                  fontSize={18}
                  fill="black"
                  fontWeight={600}
                />
              </Line>
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
