import React, { useState } from 'react'
import { MONTHLY_MRR, CONTRACT_TIERS, formatCurrency } from '../data/mockData'

export default function MRRTable() {
  const [tierFilter, setTierFilter] = useState('All')

  const tiers = ['gold', 'silver', 'bronze']
  const visibleTiers = tierFilter === 'All'
    ? tiers
    : [tierFilter.toLowerCase()]

  return (
    <div className="card">
      <div className="card-header">
        <h2>Monthly Recurring Revenue</h2>
        <select
          className="tier-filter-select"
          value={tierFilter}
          onChange={e => setTierFilter(e.target.value)}
        >
          <option value="All">All Tiers</option>
          {CONTRACT_TIERS.map(tier => (
            <option key={tier} value={tier}>{tier}</option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total MRR</th>
            {visibleTiers.map(t => (
              <th key={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MONTHLY_MRR.map(row => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td className="val total">{formatCurrency(row.total)}</td>
              {visibleTiers.map(t => (
                <td key={t} className="val">{formatCurrency(row[t])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
