import React, { useState } from 'react'
import { CLIENTS, CONTRACT_TIERS, formatCurrency } from '../data/mockData'

export default function ClientTable() {
  const [selectedTier, setSelectedTier] = useState('All')

  const filteredClients = selectedTier === 'All'
    ? CLIENTS
    : CLIENTS.filter(client => client.tier === selectedTier)

  return (
    <div className="card">
      <div className="card-header">
        <h2>Client Overview</h2>
        <div className="card-header-actions">
          <div className="dropdown-filter">
            <label htmlFor="tier-filter" className="dropdown-filter-label">Tier:</label>
            <select
              id="tier-filter"
              className="dropdown-filter-select"
              value={selectedTier}
              onChange={e => setSelectedTier(e.target.value)}
            >
              <option value="All">All Tiers</option>
              {CONTRACT_TIERS.map(tier => (
                <option key={tier} value={tier}>{tier}</option>
              ))}
            </select>
          </div>
          <span className="badge">{filteredClients.length} clients</span>
        </div>
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
          {filteredClients.map(client => (
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
