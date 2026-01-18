"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HeatmapCell {
  x: string
  y: string
  value: number
}

interface HeatmapProps {
  title: string
  description?: string
  data: HeatmapCell[]
  xLabels: string[]
  yLabels: string[]
  maxValue?: number
}

export function Heatmap({ title, description, data, xLabels, yLabels, maxValue }: HeatmapProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value))

  const getColor = (value: number) => {
    const intensity = value / max
    if (intensity < 0.25) return "bg-success/30"
    if (intensity < 0.5) return "bg-success/60"
    if (intensity < 0.75) return "bg-warning/60"
    return "bg-danger/70"
  }

  const getValue = (x: string, y: string) => {
    const cell = data.find((d) => d.x === x && d.y === y)
    return cell?.value ?? 0
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
        {description && <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            {/* X-axis labels */}
            <div className="flex">
              <div className="w-20" />
              {xLabels.map((label) => (
                <div
                  key={label}
                  className="flex-1 min-w-[60px] text-center text-xs font-medium text-muted-foreground pb-2"
                >
                  {label}
                </div>
              ))}
            </div>
            {/* Grid */}
            {yLabels.map((yLabel) => (
              <div key={yLabel} className="flex items-center">
                <div className="w-20 text-xs font-medium text-muted-foreground pr-2 text-right truncate">{yLabel}</div>
                {xLabels.map((xLabel) => {
                  const value = getValue(xLabel, yLabel)
                  return (
                    <div key={`${xLabel}-${yLabel}`} className="flex-1 min-w-[60px] p-0.5">
                      <div
                        className={cn(
                          "h-10 rounded flex items-center justify-center text-xs font-medium transition-colors",
                          getColor(value),
                          value > max * 0.5 ? "text-foreground" : "text-foreground/80",
                        )}
                        title={`${yLabel} - ${xLabel}: ${value}%`}
                      >
                        {value}%
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
            {/* Legend */}
            <div className="flex items-center justify-end gap-4 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-success/30" />
                <span>Low</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-success/60" />
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-warning/60" />
                <span>High</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-danger/70" />
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
