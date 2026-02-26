import React from 'react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'clients', label: 'Clients', icon: '👥' },
  { id: 'requests', label: 'Feature Requests', icon: '💡' },
  { id: 'billing', label: 'Billing', icon: '💳' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">🚀</span>
        <span className="logo-text">GrowthOps</span>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">JT</div>
          <div className="user-details">
            <div className="user-name">Joe Tey</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
