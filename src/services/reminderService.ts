// Mock Reminder service. Replace with a real Reminder API later (push
// notifications, scheduling, snoozing) while keeping this interface.

import { initialRoutine, initialFamilyReminders } from '../data/mockData'

export const reminderService = {
  async getRoutine() {
    await delay(150)
    return initialRoutine
  },

  async getFamilyReminders() {
    await delay(150)
    return initialFamilyReminders
  },
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
