import { motion } from 'framer-motion'
import { X, PlayCircle, Sparkles } from 'lucide-react'
import type { Memory } from '../types'
import { useApp } from '../context/AppContext'

export default function MemoryModal({ memory, onClose }: { memory: Memory; onClose: () => void }) {
  const { openCompanion, pushToast } = useApp()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-navy-900/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={memory.title}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl2 shadow-soft max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="relative">
          <img src={memory.image} alt={memory.title} className="w-full h-56 object-cover" />
          <button
            onClick={onClose}
            aria-label="Close memory"
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy-600 hover:bg-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-display font-semibold text-navy-700">{memory.title}</h2>
          <p className="text-navy-400 mt-1">{memory.person} · {memory.date}</p>
          <p className="text-navy-600 mt-4 leading-relaxed">{memory.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => pushToast('Playing memory highlights…')}
              className="min-h-[48px] px-5 rounded-full bg-navy-600 text-white font-semibold flex items-center gap-2 hover:bg-navy-700 transition-colors"
            >
              <PlayCircle size={20} /> Play Memory
            </button>
            <button
              onClick={() => {
                openCompanion(memory.companionPrompt)
                onClose()
              }}
              className="min-h-[48px] px-5 rounded-full bg-sky-50 text-navy-600 font-semibold flex items-center gap-2 hover:bg-sky-100 transition-colors"
            >
              <Sparkles size={20} /> Ask Companion
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
