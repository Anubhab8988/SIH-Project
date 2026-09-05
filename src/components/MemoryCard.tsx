import { motion } from 'framer-motion'
import type { Memory } from '../types'

export default function MemoryCard({ memory, onOpen }: { memory: Memory; onOpen: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      onClick={onOpen}
      className="text-left bg-white rounded-xl2 border border-sky-100 shadow-card overflow-hidden group"
    >
      <div className="aspect-[4/3] overflow-hidden bg-cream-200">
        <img
          src={memory.image}
          alt={memory.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="font-display font-semibold text-navy-700">{memory.title}</p>
        <p className="text-sm text-navy-400 mt-0.5">{memory.person} · {memory.date}</p>
      </div>
    </motion.button>
  )
}
