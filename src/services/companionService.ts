// Mock AI Companion service.
//
// getCompanionResponse(intent, context) currently returns a predefined demo
// response. To connect a real AI Companion API later, replace the body of
// getCompanionResponse with a network call that sends `intent` and `context`
// to the API and returns its reply, keeping the same function signature so
// nothing else in the app needs to change.

export type CompanionSection =
  | 'home'
  | 'games'
  | 'activities'
  | 'memories'
  | 'family'
  | 'progress'
  | 'general'

export type CompanionIntent =
  | 'greeting'
  | 'feeling_good'
  | 'feeling_tired'
  | 'play_game'
  | 'show_memories'
  | 'today_plan'
  | 'section_enter'
  | 'memory_prompt'

interface CompanionContext {
  section?: CompanionSection
  extra?: string
}

const sectionGreetings: Record<CompanionSection, string> = {
  home: "Good morning! You have 4 activities planned today.",
  games: 'Would you like to try a quick memory game?',
  activities: 'You have your medicine reminder coming up soon.',
  memories: 'Would you like to look at some family memories?',
  family: 'You can add trusted family members here.',
  progress: "You've completed 3 activities today. That's wonderful!",
  general: 'Good morning! How are you feeling today?',
}

const intentResponses: Record<CompanionIntent, string> = {
  greeting: 'Good morning! How are you feeling today?',
  feeling_good: "That's wonderful to hear! Would you like to play a quick memory game?",
  feeling_tired: "That's alright — a short walk or a gentle game can help you feel brighter.",
  play_game: 'Great choice! Heading to the Cognitive Games now.',
  show_memories: "Of course! Let's look at some familiar faces and happy moments.",
  today_plan: 'You have your morning medicine at 9:00 AM and a short walk at 10:30 AM.',
  section_enter: 'Let me know if you would like some company here.',
  memory_prompt: 'Do you remember this moment?',
}

export async function getCompanionResponse(
  intent: CompanionIntent,
  context: CompanionContext = {},
): Promise<string> {
  await delay(250)
  if (intent === 'section_enter' && context.section) {
    return sectionGreetings[context.section]
  }
  return intentResponses[intent] ?? sectionGreetings.general
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
