import React, { useState, useMemo } from 'react'
import { MONTHLY_MRR, CONTRACT_TIERS, formatCurrency } from '../data/mockData'

export default function MRRTable() {
  const [activeTiers, setActiveTiers] = useState(new Set(CONTRACT_TIERS))

  const toggleTier = (tier) => {
    setActiveTiers(prev => {
      const next = new Set(prev)
      if (next.has(tier)) {
        if (next.size > 1) next.delete(tier)
      } else {
        next.add(tier)
      }
      return next
    })
  }

  const tierKey = { Gold: 'gold', Silver: 'silver', Bronze: 'bronze' }

  const filteredRows = useMemo(() => {
    return MONTHLY_MRR.map(row => {
      const filteredTotal = CONTRACT_TIERS.reduce((sum, t) => {
        return sum + (activeTiers.has(t) ? row[tierKey[t]] : 0)
      }, 0)
      return { ...row, filteredTotal }
    })
  }, [activeTiers])

  const summary = useMemo(() => {
    const totals = { gold: 0, silver: 0, bronze: 0, total: 0, filteredTotal: 0 }
    filteredRows.forEach(row => {
      totals.gold += row.gold
      totals.silver += row.silver
      totals.bronze += row.bronze
      totals.total += row.total
      totals.filteredTotal += row.filteredTotal
    })
    const avg = {
      gold: Math.round(totals.gold / filteredRows.length),
      silver: Math.round(totals.silver / filteredRows.length),
      bronze: Math.round(totals.bronze / filteredRows.length),
      total: Math.round(totals.total / filteredRows.length),
      filteredTotal: Math.round(totals.filteredTotal / filteredRows.length),
    }
    return { totals, avg }
  }, [filteredRows])

  const allActive = activeTiers.size === CONTRACT_TIERS.length

  return (
    <div className="card">
      <div className="card-header">
        <h2>Monthly Recurring Revenue</h2>
        <div className="tier-filters">
          {CONTRACT_TIERS.map(tier => (
            <button
              key={tier}
              className={`tier-filter-btn tier-filter-${tier.toLowerCase()} ${activeTiers.has(tier) ? 'active' : ''}`}
              onClick={() => toggleTier(tier)}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>{allActive ? 'Total MRR' : 'Filtered MRR'}</th>
            {activeTiers.has('Gold') && <th>Gold</th>}
            {activeTiers.has('Silver') && <th>Silver</th>}
            {activeTiers.has('Bronze') && <th>Bronze</th>}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(row => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td className="val total">{formatCurrency(row.filteredTotal)}</td>
              {activeTiers.has('Gold') && <td className="val">{formatCurrency(row.gold)}</td>}
              {activeTiers.has('Silver') && <td className="val">{formatCurrency(row.silver)}</td>}
              {activeTiers.has('Bronze') && <td className="val">{formatCurrency(row.bronze)}</td>}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="summary-row summary-avg">
            <td className="summary-label">Avg</td>
            <td className="val total">{formatCurrency(summary.avg.filteredTotal)}</td>
            {activeTiers.has('Gold') && <td className="val">{formatCurrency(summary.avg.gold)}</td>}
            {activeTiers.has('Silver') && <td className="val">{formatCurrency(summary.avg.silver)}</td>}
            {activeTiers.has('Bronze') && <td className="val">{formatCurrency(summary.avg.bronze)}</td>}
          </tr>
          <tr className="summary-row summary-total">
            <td className="summary-label">Total</td>
            <td className="val total">{formatCurrency(summary.totals.filteredTotal)}</td>
            {activeTiers.has('Gold') && <td className="val">{formatCurrency(summary.totals.gold)}</td>}
            {activeTiers.has('Silver') && <td className="val">{formatCurrency(summary.totals.silver)}</td>}
            {activeTiers.has('Bronze') && <td className="val">{formatCurrency(summary.totals.bronze)}</td>}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
