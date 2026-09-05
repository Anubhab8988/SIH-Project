import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import MemoryCard from '../components/MemoryCard'
import MemoryModal from '../components/MemoryModal'
import { memories, lovedOneMessages } from '../data/mockData'
import type { Memory } from '../types'

export default function Memories() {
  const [openMemory, setOpenMemory] = useState<Memory | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)

  function togglePlay(id: string) {
    if (playingId === id) {
      setPlayingId(null)
      return
    }
    setPlayingId(id)
    // Simulated playback — no real audio in this prototype.
    setTimeout(() => setPlayingId((current) => (current === id ? null : current)), 2200)
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Memories</h1>
      <p className="text-navy-500 mt-1">Familiar faces and happy moments, always close by.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} onOpen={() => setOpenMemory(memory)} />
        ))}
      </div>

      <h2 className="font-display text-xl font-semibold text-navy-700 mt-12 mb-4">Messages From Loved Ones</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lovedOneMessages.map((msg) => {
          const isPlaying = playingId === msg.id
          return (
            <div key={msg.id} className="bg-white rounded-xl2 border border-sky-100 shadow-card p-5 flex items-start gap-3">
              <button
                onClick={() => togglePlay(msg.id)}
                aria-label={isPlaying ? `Pause message from ${msg.from}` : `Play message from ${msg.from}`}
                className="w-12 h-12 rounded-full bg-lavender-400 text-white flex items-center justify-center shrink-0 hover:bg-lavender-500 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-navy-700">{msg.from}</p>
                <p className="text-xs text-navy-400 mb-1">{msg.relationship} · {msg.durationLabel}</p>
                <p className="text-sm text-navy-600 leading-snug">{msg.message}</p>
                {isPlaying && (
                  <div className="mt-2 h-1.5 bg-lavender-100 rounded-full overflow-hidden">
                    <div className="h-full bg-lavender-400 animate-pulse" style={{ width: '70%' }} />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {openMemory && <MemoryModal memory={openMemory} onClose={() => setOpenMemory(null)} />}
      </AnimatePresence>
    </div>
  )
}
