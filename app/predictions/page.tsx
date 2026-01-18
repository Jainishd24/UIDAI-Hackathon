import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { KPICard } from "@/components/dashboard/kpi-card"
import { PredictionChart } from "@/components/charts/prediction-chart"
import { ForecastCard } from "@/components/dashboard/forecast-card"
import { LineChart } from "@/components/charts/line-chart"
import { InsightCard } from "@/components/dashboard/insight-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Activity, BarChart3 } from "lucide-react"
import {
  enrolmentPredictions,
  biometricPredictions,
  riskEscalationData,
  demographicForecasts,
  modelMetrics,
  stateDemandForecasts,
} from "@/lib/data/prediction-data"

export default function PredictionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <Header title="Predictions" description="Forecasts using Linear Regression and Time Series models" />
        <div className="p-6">
          {/* KPI Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              title="Predicted Enrolments"
              value="122M"
              change={8.5}
              changeLabel="next 6 months"
              icon={TrendingUp}
              iconColor="text-chart-1"
            />
            <KPICard
              title="Biometric Updates"
              value="16.1M"
              change={12.2}
              changeLabel="forecast"
              icon={Activity}
              iconColor="text-chart-2"
            />
            <KPICard
              title="Model Accuracy"
              value="94%"
              change={2.1}
              changeLabel="improvement"
              icon={Target}
              iconColor="text-success"
            />
            <KPICard
              title="Avg Prediction Error"
              value="6.2%"
              change={-1.5}
              changeLabel="reduced"
              icon={BarChart3}
              iconColor="text-chart-3"
            />
          </div>

          {/* Model Insights */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InsightCard
              title="Peak Demand Expected in April"
              description="Model predicts 21.5M enrolments in April 2025, driven by financial year-end documentation requirements and student admissions."
              icon={TrendingUp}
              type="info"
            />
            <InsightCard
              title="Risk Escalation Warning"
              description="Bihar and Jharkhand show projected risk score increase of 3-4 points over the next quarter, requiring proactive intervention."
              icon={Target}
              type="warning"
            />
          </div>

          {/* Prediction Charts */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <PredictionChart
              title="Enrolment Forecast"
              description="Actual vs Predicted using Linear Regression"
              data={enrolmentPredictions}
              actualKey="actual"
              predictedKey="predicted"
              dividerIndex={6}
              height={320}
            />
            <PredictionChart
              title="Biometric Update Forecast"
              description="Time series prediction model"
              data={biometricPredictions}
              actualKey="actual"
              predictedKey="predicted"
              dividerIndex={6}
              height={320}
            />
          </div>

          {/* Demographic Forecasts */}
          <div className="mt-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Demographic Update Forecasts
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {demographicForecasts.map((forecast) => (
                <ForecastCard
                  key={forecast.type}
                  title={forecast.type}
                  currentValue={forecast.current}
                  forecastValue={forecast.forecast}
                  change={forecast.change}
                  period={forecast.period}
                  confidence={forecast.confidence}
                />
              ))}
            </div>
          </div>

          {/* Risk Escalation */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LineChart
                title="Risk Score Forecast by State"
                description="Projected risk escalation over next 6 months"
                data={riskEscalationData}
                lines={[
                  { dataKey: "bihar", color: "var(--danger)", name: "Bihar" },
                  { dataKey: "jharkhand", color: "var(--chart-4)", name: "Jharkhand" },
                  { dataKey: "odisha", color: "var(--warning)", name: "Odisha" },
                  { dataKey: "up", color: "var(--chart-2)", name: "UP" },
                ]}
                xAxisKey="month"
                height={300}
              />
            </div>
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-card-foreground">Model Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Enrolment Model</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">R²:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.enrolment.r2}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAPE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.enrolment.mape}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.enrolment.mae}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">RMSE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.enrolment.rmse}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Biometric Model</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">R²:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.biometric.r2}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAPE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.biometric.mape}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.biometric.mae}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">RMSE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.biometric.rmse}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Demographic Model</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">R²:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.demographic.r2}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAPE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.demographic.mape}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MAE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.demographic.mae}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">RMSE:</span>
                      <span className="ml-2 font-medium text-card-foreground">{modelMetrics.demographic.rmse}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* State Demand Table */}
          <div className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-card-foreground">
                  State-wise Demand Forecast (Next 6 Months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 text-left font-medium text-muted-foreground">State</th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">Current</th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">Forecast</th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">Growth</th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">Confidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateDemandForecasts.map((state) => (
                        <tr key={state.state} className="border-b border-border/50 hover:bg-secondary/50">
                          <td className="py-3 font-medium text-card-foreground">{state.state}</td>
                          <td className="py-3 text-right text-muted-foreground">{state.current}</td>
                          <td className="py-3 text-right text-primary font-medium">{state.forecast}</td>
                          <td className="py-3 text-right text-success">+{state.change}%</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1">
                              <span
                                className={`h-2 w-2 rounded-full ${state.confidence >= 90 ? "bg-success" : "bg-warning"}`}
                              />
                              {state.confidence}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
