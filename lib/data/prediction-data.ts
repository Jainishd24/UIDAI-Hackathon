// Enrolment predictions
export const enrolmentPredictions = [
  { month: "Jul 24", actual: 16800000, predicted: null },
  { month: "Aug 24", actual: 18500000, predicted: null },
  { month: "Sep 24", actual: 17800000, predicted: null },
  { month: "Oct 24", actual: 19200000, predicted: null },
  { month: "Nov 24", actual: 18900000, predicted: null },
  { month: "Dec 24", actual: 17500000, predicted: null },
  { month: "Jan 25", actual: 19500000, predicted: 19200000 },
  { month: "Feb 25", actual: 18800000, predicted: 18500000 },
  { month: "Mar 25", actual: null, predicted: 20200000 },
  { month: "Apr 25", actual: null, predicted: 21500000 },
  { month: "May 25", actual: null, predicted: 20800000 },
  { month: "Jun 25", actual: null, predicted: 19200000 },
]

// Biometric update predictions
export const biometricPredictions = [
  { month: "Jul 24", actual: 2400000, predicted: null },
  { month: "Aug 24", actual: 2650000, predicted: null },
  { month: "Sep 24", actual: 2480000, predicted: null },
  { month: "Oct 24", actual: 2720000, predicted: null },
  { month: "Nov 24", actual: 2580000, predicted: null },
  { month: "Dec 24", actual: 2350000, predicted: null },
  { month: "Jan 25", actual: 2520000, predicted: 2480000 },
  { month: "Feb 25", actual: 2450000, predicted: 2400000 },
  { month: "Mar 25", actual: null, predicted: 2680000 },
  { month: "Apr 25", actual: null, predicted: 2850000 },
  { month: "May 25", actual: null, predicted: 2750000 },
  { month: "Jun 25", actual: null, predicted: 2550000 },
]

// Risk escalation forecast
export const riskEscalationData = [
  { month: "Jan 25", bihar: 78, jharkhand: 72, odisha: 65, up: 52 },
  { month: "Feb 25", bihar: 79, jharkhand: 73, odisha: 64, up: 51 },
  { month: "Mar 25", bihar: 81, jharkhand: 74, odisha: 66, up: 53 },
  { month: "Apr 25", bihar: 82, jharkhand: 75, odisha: 67, up: 54 },
  { month: "May 25", bihar: 80, jharkhand: 73, odisha: 65, up: 52 },
  { month: "Jun 25", bihar: 78, jharkhand: 71, odisha: 63, up: 50 },
]

// State-level demand forecasts
export const stateDemandForecasts = [
  { state: "Uttar Pradesh", current: "28.5M", forecast: "31.2M", change: 9.5, confidence: 92 },
  { state: "Maharashtra", current: "24.2M", forecast: "26.1M", change: 7.9, confidence: 94 },
  { state: "Bihar", current: "19.8M", forecast: "21.5M", change: 8.6, confidence: 88 },
  { state: "West Bengal", current: "18.5M", forecast: "19.8M", change: 7.0, confidence: 91 },
  { state: "Madhya Pradesh", current: "16.2M", forecast: "17.5M", change: 8.0, confidence: 89 },
  { state: "Rajasthan", current: "15.8M", forecast: "17.1M", change: 8.2, confidence: 90 },
]

// Demographic update forecasts
export const demographicForecasts = [
  { type: "Address Updates", current: "45M", forecast: "52M", change: 15.6, period: "Next 6 months", confidence: 87 },
  { type: "Mobile Updates", current: "38M", forecast: "42M", change: 10.5, period: "Next 6 months", confidence: 91 },
  {
    type: "Name Corrections",
    current: "12M",
    forecast: "13.5M",
    change: 12.5,
    period: "Next 6 months",
    confidence: 85,
  },
  { type: "DOB Corrections", current: "8.5M", forecast: "9.2M", change: 8.2, period: "Next 6 months", confidence: 89 },
]

// Model performance metrics
export const modelMetrics = {
  enrolment: { mae: "1.2M", rmse: "1.8M", r2: 0.94, mape: 6.2 },
  biometric: { mae: "180K", rmse: "245K", r2: 0.91, mape: 7.8 },
  demographic: { mae: "2.1M", rmse: "2.8M", r2: 0.89, mape: 8.5 },
}
