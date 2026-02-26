import React from 'react'
import { CLIENTS, MONTHLY_MRR, FEATURE_REQUESTS, formatCurrency } from '../data/mockData'

export default function StatsCards() {
  const latestMRR = MONTHLY_MRR[MONTHLY_MRR.length - 1]
  const prevMRR = MONTHLY_MRR[MONTHLY_MRR.length - 2]
  const mrrGrowth = ((latestMRR.total - prevMRR.total) / prevMRR.total * 100).toFixed(1)

  const totalSeats = CLIENTS.reduce((sum, c) => sum + c.seats, 0)
  const avgUsage = Math.round(CLIENTS.reduce((sum, c) => sum + c.usage, 0) / CLIENTS.length)
  const openRequests = FEATURE_REQUESTS.filter(r => r.status === 'open').length

  const stats = [
    {
      label: 'Total MRR',
      value: formatCurrency(latestMRR.total),
      change: `+${mrrGrowth}%`,
      changeType: 'positive',
      icon: '💰',
    },
    {
      label: 'Active Clients',
      value: CLIENTS.length,
      change: '+2 this quarter',
      changeType: 'positive',
      icon: '👥',
    },
    {
      label: 'Total Seats',
      value: totalSeats.toLocaleString(),
      change: `${avgUsage}% avg usage`,
      changeType: 'neutral',
      icon: '🪑',
    },
    {
      label: 'Open Requests',
      value: openRequests,
      change: `${FEATURE_REQUESTS.length} total`,
      changeType: 'neutral',
      icon: '💡',
    },
  ]

  return (
    <div className="stats-grid">
      {stats.map(stat => (
        <div key={stat.label} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.changeType}`}>{stat.change}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
