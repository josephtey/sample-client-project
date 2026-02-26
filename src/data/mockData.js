/**
 * Mock data for the GrowthOps B2B SaaS Dashboard.
 * This simulates real client, revenue, and usage data.
 */

export const CONTRACT_TIERS = ['Gold', 'Silver', 'Bronze']

export const CLIENTS = [
  { id: 1, name: 'Acme Corp', tier: 'Gold', mrr: 8500, seats: 45, signedDate: '2024-03-15', status: 'active', usage: 87 },
  { id: 2, name: 'TechStart Inc', tier: 'Silver', mrr: 4200, seats: 22, signedDate: '2024-06-01', status: 'active', usage: 63 },
  { id: 3, name: 'DataFlow Systems', tier: 'Gold', mrr: 9200, seats: 60, signedDate: '2023-11-20', status: 'active', usage: 91 },
  { id: 4, name: 'CloudNine SaaS', tier: 'Bronze', mrr: 1800, seats: 8, signedDate: '2025-01-10', status: 'active', usage: 45 },
  { id: 5, name: 'Meridian Analytics', tier: 'Silver', mrr: 5100, seats: 30, signedDate: '2024-08-22', status: 'active', usage: 72 },
  { id: 6, name: 'Apex Industries', tier: 'Gold', mrr: 11000, seats: 75, signedDate: '2023-09-05', status: 'active', usage: 94 },
  { id: 7, name: 'NovaBridge', tier: 'Bronze', mrr: 1500, seats: 5, signedDate: '2025-04-18', status: 'active', usage: 31 },
  { id: 8, name: 'Quantum Logic', tier: 'Silver', mrr: 4800, seats: 28, signedDate: '2024-04-30', status: 'active', usage: 68 },
  { id: 9, name: 'Pinnacle Group', tier: 'Gold', mrr: 7800, seats: 40, signedDate: '2024-01-12', status: 'active', usage: 82 },
  { id: 10, name: 'Stratos Cloud', tier: 'Bronze', mrr: 2100, seats: 10, signedDate: '2024-11-03', status: 'active', usage: 52 },
  { id: 11, name: 'Helix Software', tier: 'Silver', mrr: 3900, seats: 18, signedDate: '2024-07-14', status: 'active', usage: 58 },
  { id: 12, name: 'Orion Dynamics', tier: 'Gold', mrr: 10500, seats: 65, signedDate: '2023-12-08', status: 'active', usage: 89 },
]

export const MONTHLY_MRR = [
  { month: 'Sep 2025', total: 72000, gold: 38000, silver: 24000, bronze: 10000 },
  { month: 'Oct 2025', total: 75200, gold: 39500, silver: 25200, bronze: 10500 },
  { month: 'Nov 2025', total: 78100, gold: 41000, silver: 26600, bronze: 10500 },
  { month: 'Dec 2025', total: 81400, gold: 43000, silver: 27900, bronze: 10500 },
  { month: 'Jan 2026', total: 84500, gold: 44500, silver: 29500, bronze: 10500 },
  { month: 'Feb 2026', total: 87200, gold: 45500, silver: 31600, bronze: 10100 },
]

export const FEATURE_REQUESTS = [
  { id: 1, client: 'Acme Corp', title: 'Custom report builder', status: 'open', priority: 'high', created: '2026-01-15' },
  { id: 2, client: 'DataFlow Systems', title: 'API rate limit dashboard', status: 'in_progress', priority: 'medium', created: '2026-01-22' },
  { id: 3, client: 'Meridian Analytics', title: 'Export to PDF', status: 'open', priority: 'low', created: '2026-02-01' },
  { id: 4, client: 'Apex Industries', title: 'SSO integration', status: 'open', priority: 'high', created: '2026-02-05' },
  { id: 5, client: 'TechStart Inc', title: 'Slack notifications for usage alerts', status: 'completed', priority: 'medium', created: '2025-12-10' },
  { id: 6, client: 'Quantum Logic', title: 'Multi-currency support', status: 'open', priority: 'medium', created: '2026-02-12' },
  { id: 7, client: 'Orion Dynamics', title: 'Role-based access controls', status: 'in_progress', priority: 'high', created: '2026-01-28' },
  { id: 8, client: 'Pinnacle Group', title: 'Dashboard dark mode', status: 'open', priority: 'low', created: '2026-02-18' },
]

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
