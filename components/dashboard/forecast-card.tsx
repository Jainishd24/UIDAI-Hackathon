import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface ForecastCardProps {
  title: string
  currentValue: string
  forecastValue: string
  change: number
  period: string
  confidence: number
}

export function ForecastCard({ title, currentValue, forecastValue, change, period, confidence }: ForecastCardProps) {
  const getTrendIcon = () => {
    if (change > 0) return <TrendingUp className="h-4 w-4" />
    if (change < 0) return <TrendingDown className="h-4 w-4" />
    return <Minus className="h-4 w-4" />
  }

  const getTrendColor = () => {
    if (change > 0) return "text-success"
    if (change < 0) return "text-danger"
    return "text-muted-foreground"
  }

  const getConfidenceColor = () => {
    if (confidence >= 90) return "bg-success"
    if (confidence >= 75) return "bg-warning"
    return "bg-danger"
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Current</p>
            <p className="text-lg font-semibold text-card-foreground">{currentValue}</p>
          </div>
          <div className={cn("flex items-center gap-1", getTrendColor())}>
            {getTrendIcon()}
            <span className="text-sm font-medium">{Math.abs(change)}%</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{period}</p>
            <p className="text-lg font-semibold text-primary">{forecastValue}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground">Model Confidence</span>
            <span className="text-xs font-medium text-card-foreground">{confidence}%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all", getConfidenceColor())}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
