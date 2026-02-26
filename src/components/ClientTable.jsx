import React from 'react'
import { CLIENTS, formatCurrency } from '../data/mockData'

export default function ClientTable() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Client Overview</h2>
        <span className="badge">{CLIENTS.length} clients</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Tier</th>
            <th>MRR</th>
            <th>Seats</th>
            <th>Usage</th>
            <th>Since</th>
          </tr>
        </thead>
        <tbody>
          {CLIENTS.map(client => (
            <tr key={client.id}>
              <td className="client-name">{client.name}</td>
              <td>
                <span className={`tier-badge tier-${client.tier.toLowerCase()}`}>
                  {client.tier}
                </span>
              </td>
              <td className="val">{formatCurrency(client.mrr)}</td>
              <td className="val">{client.seats}</td>
              <td>
                <div className="usage-bar-container">
                  <div className="usage-bar" style={{ width: `${client.usage}%` }}>
                    <span className="usage-label">{client.usage}%</span>
                  </div>
                </div>
              </td>
              <td className="date">{client.signedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
