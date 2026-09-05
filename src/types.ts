export type ReminderStatus = 'upcoming' | 'completed' | 'missed'

export interface RoutineItem {
  id: string
  time: string
  title: string
  icon: 'sunrise' | 'pill' | 'footprints' | 'utensils' | 'droplet' | 'moon' | 'users'
  status: ReminderStatus
}

export interface FamilyReminderMessage {
  id: string
  from: string
  relationship: string
  message: string
  time: string
  status: ReminderStatus
  snoozedTo?: string
}

export interface Memory {
  id: number
  title: string
  person: string
  date: string
  image: string
  description: string
  companionPrompt: string
}

export interface LovedOneMessage {
  id: string
  from: string
  relationship: string
  message: string
  durationLabel: string
}

export interface FamilyMember {
  id: string
  name: string
  relationship: string
  role: 'Primary Caregiver' | 'Family Member' | 'Healthcare Worker'
  permissions: string
  avatarColor: string
  initials: string
}

export interface GameQuestionOption {
  id: string
  label: string
}

export interface GameQuestionData {
  id: string
  prompt: string
  image?: string
  options: GameQuestionOption[]
  correctOptionId: string
  encouragement: string
}

export interface GameDefinition {
  id: string
  title: string
  description: string
  icon: 'users' | 'heart' | 'cake' | 'box' | 'grid' | 'sun'
  implemented: boolean
  questions: GameQuestionData[]
}

export interface WeeklyEngagementPoint {
  day: string
  value: number
}

export interface CompanionMessage {
  id: string
  sender: 'companion' | 'user'
  text: string
}

export interface DemoUser {
  name: string
  email: string
}
