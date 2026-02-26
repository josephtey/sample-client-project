import React from 'react'
import { MONTHLY_MRR, formatCurrency } from '../data/mockData'

export default function MRRTable() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Monthly Recurring Revenue</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total MRR</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
          </tr>
        </thead>
        <tbody>
          {MONTHLY_MRR.map(row => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td className="val total">{formatCurrency(row.total)}</td>
              <td className="val">{formatCurrency(row.gold)}</td>
              <td className="val">{formatCurrency(row.silver)}</td>
              <td className="val">{formatCurrency(row.bronze)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
