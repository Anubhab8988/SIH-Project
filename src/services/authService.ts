// Mock authentication service.
// To connect a real Authentication API later, keep this same function
// signature and replace the body with a real network call.

import type { DemoUser } from '../types'

const DEMO_EMAIL = 'demo@example.com'
const DEMO_PASSWORD = '123456'
const STORAGE_KEY = 'neuroplay_demo_user'

export const authService = {
  async signIn(email: string, _password: string): Promise<DemoUser> {
    await delay(400)
    // Any reasonable input is accepted for the prototype; demo credentials
    // are provided for convenience but not strictly enforced.
    const name = email.split('@')[0] || 'Anubhab'
    const user: DemoUser = { name: capitalize(name), email: email || DEMO_EMAIL }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
  },

  async signUp(name: string, email: string, _password: string): Promise<DemoUser> {
    await delay(400)
    const user: DemoUser = { name: name || 'New Caregiver', email: email || DEMO_EMAIL }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
  },

  async enterDemoMode(): Promise<DemoUser> {
    await delay(200)
    const user: DemoUser = { name: 'Anubhab', email: DEMO_EMAIL }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
  },

  getStoredUser(): DemoUser | null {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  },

  signOut() {
    localStorage.removeItem(STORAGE_KEY)
  },

  demoPassword: DEMO_PASSWORD,
  demoEmail: DEMO_EMAIL,
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
