"use client";

import { useState, useEffect } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  total: {
    label: "RWF",
    color: "hsl(var(--primary))",
  },
};

const initialData = [
  { month: "Jan", total: 0 },
  { month: "Feb", total: 0 },
  { month: "Mar", total: 0 },
  { month: "Apr", total: 0 },
  { month: "May", total: 0 },
  { month: "Jun", total: 0 },
  { month: "Jul", total: 0 },
  { month: "Aug", total: 0 },
  { month: "Sep", total: 0 },
  { month: "Oct", total: 0 },
  { month: "Nov", total: 0 },
  { month: "Dec", total: 0 },
];

export default function AccountChart() {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    setChartData(initialData.map(item => ({...item, total: Math.floor(Math.random() * 5000) + 1000})))
  }, []);

  return (
    <Card>
        <CardHeader>
            <CardTitle>Account Overview</CardTitle>
            <CardDescription>Your account activity over the year.</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="total" fill="var(--color-total)" radius={4} />
              </BarChart>
            </ChartContainer>
        </CardContent>
    </Card>
  );
}
