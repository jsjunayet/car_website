"use client";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";

export const description = "A donut chart with text";

// Chart data for browser visitors
const chartData = [
  { browser: "chrome", visitors: 10, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 2, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 2, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 1, fill: "var(--color-edge)" },
  { browser: "other", visitors: 1, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};
export function PieCharts() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  //   // Mock data for additional metrics
  //   const todayVisitors = Math.floor(totalVisitors / 30)  // Approximation for daily visitors
  //   const monthVisitors = totalVisitors  // Assume total visitors as monthly for this example
  //   const newAccountsThisMonth = Math.floor(totalVisitors * 0.2) // 20% as new accounts

  return (
    <Card className="flex flex-col !rounded-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total visitors for the last 6 months
        </div>
        {/* Display additional metrics */}
        {/* <div className="">
          <p><strong>Total Visitors Today:</strong> {todayVisitors.toLocaleString()}</p>
          <p><strong>This Month Visitors:</strong> {monthVisitors.toLocaleString()}</p>
          <p><strong>New Accounts This Month:</strong> {newAccountsThisMonth.toLocaleString()}</p>
        </div> */}
      </CardFooter>
    </Card>
  );
}
