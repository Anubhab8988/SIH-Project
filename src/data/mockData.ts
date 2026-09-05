import type {
  RoutineItem,
  FamilyReminderMessage,
  Memory,
  LovedOneMessage,
  FamilyMember,
  GameDefinition,
  WeeklyEngagementPoint,
} from '../types'

// ---------------------------------------------------------------------------
// PATIENT PROFILE
// Replace with real patient data once a Patient Profile API is connected.
// ---------------------------------------------------------------------------
export const patientProfile = {
  name: 'Ramesh',
  caregiverName: 'Anubhab',
  relationshipToCaregiver: 'Father',
}

// ---------------------------------------------------------------------------
// TODAY'S ROUTINE
// ---------------------------------------------------------------------------
export const initialRoutine: RoutineItem[] = [
  { id: 'r1', time: '08:00 AM', title: 'Breakfast', icon: 'sunrise', status: 'completed' },
  { id: 'r2', time: '09:00 AM', title: 'Morning Medicine', icon: 'pill', status: 'upcoming' },
  { id: 'r3', time: '10:30 AM', title: 'Short Walk', icon: 'footprints', status: 'upcoming' },
  { id: 'r4', time: '01:00 PM', title: 'Lunch', icon: 'utensils', status: 'upcoming' },
  { id: 'r5', time: '03:00 PM', title: 'Drink Water', icon: 'droplet', status: 'upcoming' },
  { id: 'r6', time: '06:00 PM', title: 'Evening Medicine', icon: 'pill', status: 'upcoming' },
  { id: 'r7', time: '08:00 PM', title: 'Family Time', icon: 'users', status: 'upcoming' },
]

// ---------------------------------------------------------------------------
// FAMILY DIALOGUE REMINDERS
// These render as conversational message cards rather than plain notifications.
// ---------------------------------------------------------------------------
export const initialFamilyReminders: FamilyReminderMessage[] = [
  {
    id: 'fr1',
    from: 'Mom',
    relationship: 'Wife',
    message: "Hi! It's time for your morning medicine. Please remember to take it \u2764\ufe0f",
    time: '9:00 AM',
    status: 'upcoming',
  },
  {
    id: 'fr2',
    from: 'Daughter',
    relationship: 'Daughter',
    message: 'Your walk is coming up in 15 minutes. Shall we go for a short walk?',
    time: '10:15 AM',
    status: 'upcoming',
  },
  {
    id: 'fr3',
    from: 'Son',
    relationship: 'Son',
    message: "Don't forget to drink some water!",
    time: '3:00 PM',
    status: 'upcoming',
  },
]

// ---------------------------------------------------------------------------
// MEMORIES
// Replace `image` with real family photographs. Any public URL or local
// asset under /src/assets works — swap the string, nothing else changes.
// ---------------------------------------------------------------------------
export const memories: Memory[] = [
  {
    id: 1,
    title: 'Family Picnic',
    person: 'Whole Family',
    date: '2012',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80',
    description: 'A beautiful family picnic by the lake, with sandwiches and laughter.',
    companionPrompt: 'Do you remember this day by the lake?',
  },
  {
    id: 2,
    title: "Ananya's Wedding",
    person: 'Ananya',
    date: '2016',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    description: 'The whole family gathered to celebrate Ananya and Rohan.',
    companionPrompt: 'What a joyful celebration this was — who do you remember dancing?',
  },
  {
    id: 3,
    title: 'Childhood Home',
    person: 'Family',
    date: '1978',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
    description: 'The house where you grew up, with the big mango tree in the yard.',
    companionPrompt: 'Tell me about the mango tree — did you climb it as a child?',
  },
  {
    id: 4,
    title: 'Diwali Together',
    person: 'Whole Family',
    date: '2019',
    image: 'https://images.unsplash.com/photo-1605021154813-b73a2b2c0d84?w=800&q=80',
    description: 'Lighting diyas together on the veranda, everyone in new clothes.',
    companionPrompt: 'Diwali always brings everyone home — who lit the first diya that year?',
  },
  {
    id: 5,
    title: 'Grandpa\u2019s Birthday',
    person: 'Grandpa',
    date: '2014',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    description: 'A birthday cake, a garden full of family, and a lot of singing.',
    companionPrompt: 'Do you remember what song everyone sang at this party?',
  },
  {
    id: 6,
    title: 'First Grandchild',
    person: 'Maya',
    date: '2020',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    description: 'Holding Maya for the very first time in the hospital.',
    companionPrompt: 'How did it feel to hold Maya for the first time?',
  },
]

// ---------------------------------------------------------------------------
// MESSAGES FROM LOVED ONES (simulated audio playback demo)
// ---------------------------------------------------------------------------
export const lovedOneMessages: LovedOneMessage[] = [
  { id: 'm1', from: 'Mom', relationship: 'Wife', message: 'Good morning! Have a wonderful day.', durationLabel: '0:12' },
  { id: 'm2', from: 'Son', relationship: 'Son', message: 'Remember to take your medicine.', durationLabel: '0:08' },
  { id: 'm3', from: 'Daughter', relationship: 'Daughter', message: 'Thinking of you today \u2764\ufe0f', durationLabel: '0:06' },
]

// ---------------------------------------------------------------------------
// FAMILY CIRCLE
// ---------------------------------------------------------------------------
export const familyMembers: FamilyMember[] = [
  {
    id: 'fc1',
    name: 'Anubhab',
    relationship: 'Son',
    role: 'Primary Caregiver',
    permissions: 'Can manage reminders, memories and patient settings.',
    avatarColor: 'bg-navy-500',
    initials: 'A',
  },
  {
    id: 'fc2',
    name: 'Priya',
    relationship: 'Daughter',
    role: 'Family Member',
    permissions: 'Can upload memories and send messages.',
    avatarColor: 'bg-sage-500',
    initials: 'P',
  },
  {
    id: 'fc3',
    name: 'Maya',
    relationship: 'Granddaughter',
    role: 'Family Member',
    permissions: 'Can view memories and send messages.',
    avatarColor: 'bg-lavender-500',
    initials: 'M',
  },
  {
    id: 'fc4',
    name: 'Dr. Sen',
    relationship: 'Physician',
    role: 'Healthcare Worker',
    permissions: 'Can view activity and engagement summaries.',
    avatarColor: 'bg-sky-500',
    initials: 'DS',
  },
]

// ---------------------------------------------------------------------------
// COGNITIVE GAMES
// ---------------------------------------------------------------------------
export const games: GameDefinition[] = [
  {
    id: 'g1',
    title: 'Remember the Names',
    description: 'Match familiar faces with their names.',
    icon: 'users',
    implemented: true,
    questions: [
      {
        id: 'g1q1',
        prompt: 'Do you remember her name?',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
        options: [
          { id: 'a', label: 'Ananya' },
          { id: 'b', label: 'Maya' },
          { id: 'c', label: 'Riya' },
          { id: 'd', label: 'Sonia' },
        ],
        correctOptionId: 'a',
        encouragement: 'Wonderful! You remembered correctly.',
      },
      {
        id: 'g1q2',
        prompt: 'And what about him?',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        options: [
          { id: 'a', label: 'Rohan' },
          { id: 'b', label: 'Anubhab' },
          { id: 'c', label: 'Vikram' },
          { id: 'd', label: 'Arjun' },
        ],
        correctOptionId: 'b',
        encouragement: "That's right — that's Anubhab, your son.",
      },
    ],
  },
  {
    id: 'g2',
    title: "Whose Birthday?",
    description: "Test your memory of family birthdays.",
    icon: 'cake',
    implemented: true,
    questions: [
      {
        id: 'g2q1',
        prompt: "When is Grandpa's birthday?",
        options: [
          { id: 'a', label: '12 March' },
          { id: 'b', label: '25 June' },
          { id: 'c', label: '8 September' },
          { id: 'd', label: '17 December' },
        ],
        correctOptionId: 'c',
        encouragement: "That's it — 8 September, just like the party by the garden.",
      },
    ],
  },
  {
    id: 'g3',
    title: 'Daily Recall',
    description: 'Simple questions about your day.',
    icon: 'sun',
    implemented: true,
    questions: [
      {
        id: 'g3q1',
        prompt: 'What did you have for breakfast?',
        options: [
          { id: 'a', label: 'Tea & Biscuits' },
          { id: 'b', label: 'Rice & Vegetables' },
          { id: 'c', label: 'Bread & Eggs' },
          { id: 'd', label: 'Fruit' },
        ],
        correctOptionId: 'a',
        encouragement: 'Yes! Tea and biscuits, just like every morning.',
      },
    ],
  },
  {
    id: 'g4',
    title: 'Family Connections',
    description: 'Coming soon — connect family members to relationships.',
    icon: 'heart',
    implemented: false,
    questions: [],
  },
  {
    id: 'g5',
    title: 'Remember the Object',
    description: 'Coming soon — a short-term memory matching game.',
    icon: 'box',
    implemented: false,
    questions: [],
  },
  {
    id: 'g6',
    title: 'Pattern Match',
    description: 'Coming soon — gentle pattern recognition practice.',
    icon: 'grid',
    implemented: false,
    questions: [],
  },
]

// ---------------------------------------------------------------------------
// PROGRESS / ENGAGEMENT (illustrative activity data, not medical measurement)
// ---------------------------------------------------------------------------
export const weeklyEngagement: WeeklyEngagementPoint[] = [
  { day: 'Mon', value: 72 },
  { day: 'Tue', value: 81 },
  { day: 'Wed', value: 76 },
  { day: 'Thu', value: 88 },
  { day: 'Fri', value: 84 },
  { day: 'Sat', value: 79 },
  { day: 'Sun', value: 86 },
]

export const progressStats = {
  gamesCompleted: 12,
  averageAccuracy: 78,
  activityCompletion: 82,
  memoryEngagementMinutes: 18,
}
