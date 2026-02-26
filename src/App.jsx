import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import MRRTable from './components/MRRTable'
import ClientTable from './components/ClientTable'
import FeatureRequests from './components/FeatureRequests'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <header className="page-header">
          <h1>{activePage === 'dashboard' ? 'Dashboard' :
               activePage === 'clients' ? 'Clients' :
               activePage === 'requests' ? 'Feature Requests' :
               activePage === 'billing' ? 'Billing' : 'Settings'}</h1>
        </header>
        <div className="page-content">
          {activePage === 'dashboard' && (
            <>
              <StatsCards />
              <div className="grid-2col">
                <MRRTable />
                <ClientTable />
              </div>
            </>
          )}
          {activePage === 'clients' && <ClientTable />}
          {activePage === 'requests' && <FeatureRequests />}
          {activePage === 'billing' && (
            <div className="card placeholder-card">
              <h2>Billing</h2>
              <p>Billing management coming soon.</p>
            </div>
          )}
          {activePage === 'settings' && (
            <div className="card placeholder-card">
              <h2>Settings</h2>
              <p>Application settings coming soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
