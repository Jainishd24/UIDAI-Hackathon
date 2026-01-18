"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts"

interface PredictionChartProps {
  title: string
  description?: string
  data: Array<Record<string, string | number | null>>
  actualKey: string
  predictedKey: string
  xAxisKey?: string
  height?: number
  dividerIndex?: number
}

export function PredictionChart({
  title,
  description,
  data,
  actualKey,
  predictedKey,
  xAxisKey = "month",
  height = 300,
  dividerIndex,
}: PredictionChartProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
        {description && <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--card-foreground)",
              }}
              formatter={(value: number | null) => (value ? [`${(value / 1000000).toFixed(2)}M`, ""] : ["-", ""])}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            {dividerIndex && (
              <ReferenceLine
                x={data[dividerIndex]?.[xAxisKey]}
                stroke="var(--muted-foreground)"
                strokeDasharray="5 5"
                label={{ value: "Forecast", fill: "var(--muted-foreground)", fontSize: 11 }}
              />
            )}
            <Line
              type="monotone"
              dataKey={actualKey}
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)", r: 4 }}
              name="Actual"
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey={predictedKey}
              stroke="var(--chart-2)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "var(--chart-2)", r: 4 }}
              name="Predicted"
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
