import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CompanionCharacter, { CompanionMood } from './CompanionCharacter'
import { getCompanionResponse, CompanionIntent } from '../services/companionService'
import { useApp } from '../context/AppContext'
import type { CompanionMessage } from '../types'

const quickReplies: { label: string; intent: CompanionIntent; goTo?: string }[] = [
  { label: "I'm feeling good", intent: 'feeling_good' },
  { label: "I'm a little tired", intent: 'feeling_tired' },
  { label: "Let's play a game", intent: 'play_game', goTo: '/app/games' },
  { label: 'Show my memories', intent: 'show_memories', goTo: '/app/memories' },
  { label: 'What should I do today?', intent: 'today_plan' },
]

export default function CompanionPanel() {
  const { closeCompanion, companionOpeningLine } = useApp()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<CompanionMessage[]>([
    { id: 'm0', sender: 'companion', text: companionOpeningLine ?? 'Good morning! How are you feeling today?' },
  ])
  const [mood, setMood] = useState<CompanionMood>('idle')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  async function handleReply(label: string, intent: CompanionIntent, goTo?: string) {
    setMessages((m) => [...m, { id: crypto.randomUUID(), sender: 'user', text: label }])
    setMood('thinking')
    const response = await getCompanionResponse(intent)
    setMood(intent === 'feeling_good' ? 'happy' : 'speaking')
    setMessages((m) => [...m, { id: crypto.randomUUID(), sender: 'companion', text: response }])
    setTimeout(() => setMood('idle'), 1400)
    if (goTo) {
      setTimeout(() => {
        navigate(goTo)
        closeCompanion()
      }, 900)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.95 }}
      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
      className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] max-w-sm bg-white rounded-xl2 shadow-soft border border-sky-100 overflow-hidden flex flex-col max-h-[70vh]"
      role="dialog"
      aria-label="Companion conversation"
    >
      <div className="bg-gradient-to-br from-navy-600 to-sky-500 px-5 py-4 flex items-center gap-3">
        <div className="scale-75 -ml-3 -my-6">
          <CompanionCharacter mood={mood} size={90} />
        </div>
        <div className="flex-1">
          <p className="text-white font-display font-semibold leading-tight">Sunny</p>
          <p className="text-sky-100 text-xs">Your care companion</p>
        </div>
        <button
          onClick={closeCompanion}
          aria-label="Close companion panel"
          className="text-white/80 hover:text-white p-2 -mr-2 rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-2xl px-4 py-2.5 max-w-[85%] text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-sky-400 text-white rounded-br-sm'
                  : 'bg-white text-navy-700 border border-sky-100 rounded-bl-sm shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-sky-100 bg-white flex flex-wrap gap-2">
        {quickReplies.map((qr) => (
          <button
            key={qr.label}
            onClick={() => handleReply(qr.label, qr.intent, qr.goTo)}
            className="min-h-[44px] px-4 py-2 rounded-full bg-sky-50 hover:bg-sky-100 text-navy-600 text-sm font-medium border border-sky-100 transition-colors"
          >
            {qr.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
