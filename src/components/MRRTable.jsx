import React, { useState } from 'react'
import { MONTHLY_MRR, formatCurrency } from '../data/mockData'

const TABS = [
  { key: 'all', label: 'All Tiers' },
  { key: 'gold', label: 'Gold' },
  { key: 'silver', label: 'Silver' },
  { key: 'bronze', label: 'Bronze' },
]

export default function MRRTable() {
  const [activeTab, setActiveTab] = useState('all')

  const getColumns = () => {
    switch (activeTab) {
      case 'gold':
        return [{ key: 'gold', label: 'Gold MRR' }]
      case 'silver':
        return [{ key: 'silver', label: 'Silver MRR' }]
      case 'bronze':
        return [{ key: 'bronze', label: 'Bronze MRR' }]
      default:
        return [
          { key: 'total', label: 'Total MRR' },
          { key: 'gold', label: 'Gold' },
          { key: 'silver', label: 'Silver' },
          { key: 'bronze', label: 'Bronze' },
        ]
    }
  }

  const columns = getColumns()

  return (
    <div className="card">
      <div className="card-header">
        <h2>Monthly Recurring Revenue</h2>
      </div>
      <div className="mrr-tabs">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`mrr-tab${activeTab === tab.key ? ' mrr-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MONTHLY_MRR.map(row => (
            <tr key={row.month}>
              <td>{row.month}</td>
              {columns.map(col => (
                <td key={col.key} className={`val${col.key === 'total' ? ' total' : ''}`}>
                  {formatCurrency(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
