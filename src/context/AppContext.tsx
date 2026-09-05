import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { initialRoutine, initialFamilyReminders, progressStats as baseProgressStats } from '../data/mockData'
import type { RoutineItem, FamilyReminderMessage, DemoUser } from '../types'
import { authService } from '../services/authService'

interface ToastItem {
  id: string
  message: string
}

interface AppContextValue {
  // auth
  user: DemoUser | null
  isDemoMode: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  enterDemo: () => Promise<void>
  signOut: () => void

  // routine / reminders
  routine: RoutineItem[]
  completeRoutineItem: (id: string) => void
  familyReminders: FamilyReminderMessage[]
  completeFamilyReminder: (id: string) => void
  snoozeFamilyReminder: (id: string, newTime: string) => void

  // games / progress
  gamesCompletedToday: number
  activitiesCompletedToday: number
  registerGameCompleted: () => void
  progressStats: typeof baseProgressStats

  // accessibility
  largeText: boolean
  toggleLargeText: () => void
  highContrast: boolean
  toggleHighContrast: () => void

  // toasts
  toasts: ToastItem[]
  pushToast: (message: string) => void
  dismissToast: (id: string) => void

  // reset
  resetDemo: () => void

  // companion panel (global so "Ask Companion" buttons anywhere can open it)
  companionOpen: boolean
  openCompanion: (openingLine?: string) => void
  closeCompanion: () => void
  companionOpeningLine: string | null
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => authService.getStoredUser())
  const [routine, setRoutine] = useState<RoutineItem[]>(initialRoutine)
  const [familyReminders, setFamilyReminders] = useState<FamilyReminderMessage[]>(initialFamilyReminders)
  const [gamesCompletedToday, setGamesCompletedToday] = useState(0)
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const [companionOpen, setCompanionOpen] = useState(false)
  const [companionOpeningLine, setCompanionOpeningLine] = useState<string | null>(null)

  const openCompanion = useCallback((openingLine?: string) => {
    setCompanionOpeningLine(openingLine ?? null)
    setCompanionOpen(true)
  }, [])

  const closeCompanion = useCallback(() => setCompanionOpen(false), [])

  const pushToast = useCallback((message: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id))
    }, 3500)
  }, [])

  const dismissToast = useCallback((id: string) => {
    setToasts((t) => t.filter((toast) => toast.id !== id))
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      const u = await authService.signIn(email, password)
      setUser(u)
    },
    [],
  )

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      const u = await authService.signUp(name, email, password)
      setUser(u)
      pushToast('Demo account created successfully.')
    },
    [pushToast],
  )

  const enterDemo = useCallback(async () => {
    const u = await authService.enterDemoMode()
    setUser(u)
  }, [])

  const signOut = useCallback(() => {
    authService.signOut()
    setUser(null)
  }, [])

  const completeRoutineItem = useCallback(
    (id: string) => {
      setRoutine((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: 'completed' } : item)),
      )
      pushToast('Marked as done. Well done!')
    },
    [pushToast],
  )

  const completeFamilyReminder = useCallback(
    (id: string) => {
      setFamilyReminders((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: 'completed' } : r)),
      )
    },
    [],
  )

  const snoozeFamilyReminder = useCallback((id: string, newTime: string) => {
    setFamilyReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, time: newTime, snoozedTo: newTime } : r)),
    )
  }, [])

  const registerGameCompleted = useCallback(() => {
    setGamesCompletedToday((c) => c + 1)
  }, [])

  const toggleLargeText = useCallback(() => setLargeText((v) => !v), [])
  const toggleHighContrast = useCallback(() => setHighContrast((v) => !v), [])

  const resetDemo = useCallback(() => {
    setRoutine(initialRoutine)
    setFamilyReminders(initialFamilyReminders)
    setGamesCompletedToday(0)
    setLargeText(false)
    setHighContrast(false)
    pushToast('Demo data has been reset.')
  }, [pushToast])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('large-text', largeText)
    root.classList.toggle('high-contrast', highContrast)
  }, [largeText, highContrast])

  const activitiesCompletedToday = useMemo(
    () => routine.filter((r) => r.status === 'completed').length,
    [routine],
  )

  const value: AppContextValue = {
    user,
    isDemoMode: user?.email === authService.demoEmail,
    signIn,
    signUp,
    enterDemo,
    signOut,
    routine,
    completeRoutineItem,
    familyReminders,
    completeFamilyReminder,
    snoozeFamilyReminder,
    gamesCompletedToday,
    activitiesCompletedToday,
    registerGameCompleted,
    progressStats: baseProgressStats,
    largeText,
    toggleLargeText,
    highContrast,
    toggleHighContrast,
    toasts,
    pushToast,
    dismissToast,
    resetDemo,
    companionOpen,
    openCompanion,
    closeCompanion,
    companionOpeningLine,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
