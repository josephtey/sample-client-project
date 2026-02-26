import React from 'react'
import { FEATURE_REQUESTS } from '../data/mockData'

const STATUS_MAP = {
  open: { label: 'Open', className: 'status-open' },
  in_progress: { label: 'In Progress', className: 'status-progress' },
  completed: { label: 'Completed', className: 'status-completed' },
}

const PRIORITY_MAP = {
  high: { label: 'High', className: 'priority-high' },
  medium: { label: 'Medium', className: 'priority-medium' },
  low: { label: 'Low', className: 'priority-low' },
}

export default function FeatureRequests() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Feature Requests</h2>
        <span className="badge">{FEATURE_REQUESTS.filter(r => r.status === 'open').length} open</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Client</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {FEATURE_REQUESTS.map(req => (
            <tr key={req.id}>
              <td className="request-title">{req.title}</td>
              <td>{req.client}</td>
              <td>
                <span className={`priority-badge ${PRIORITY_MAP[req.priority].className}`}>
                  {PRIORITY_MAP[req.priority].label}
                </span>
              </td>
              <td>
                <span className={`status-badge ${STATUS_MAP[req.status].className}`}>
                  {STATUS_MAP[req.status].label}
                </span>
              </td>
              <td className="date">{req.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
