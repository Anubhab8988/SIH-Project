// Mock Memory Storage service. Replace with a real Memory Storage API later
// (uploading photos, fetching albums, etc.) while keeping this interface.

import { memories, lovedOneMessages } from '../data/mockData'

export const memoryService = {
  async listMemories() {
    await delay(150)
    return memories
  },

  async listLovedOneMessages() {
    await delay(150)
    return lovedOneMessages
  },
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
