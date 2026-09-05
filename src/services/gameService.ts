// Mock Cognitive Game service. Replace with a real Cognitive Game API later
// (fetching questions, submitting answers, retrieving scores) while keeping
// these same function signatures.

import { games } from '../data/mockData'
import type { GameDefinition } from '../types'

export const gameService = {
  async listGames(): Promise<GameDefinition[]> {
    await delay(150)
    return games
  },

  async getGame(id: string): Promise<GameDefinition | undefined> {
    await delay(100)
    return games.find((g) => g.id === id)
  },

  async submitAnswer(gameId: string, questionId: string, optionId: string) {
    await delay(150)
    const game = games.find((g) => g.id === gameId)
    const question = game?.questions.find((q) => q.id === questionId)
    const correct = question?.correctOptionId === optionId
    return { correct, encouragement: question?.encouragement ?? '' }
  },
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
