import React from 'react'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'clients', label: 'Clients' },
]

export default function DataTabs({ activeTab, onTabChange }) {
  return (
    <div className="data-tabs">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`data-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
