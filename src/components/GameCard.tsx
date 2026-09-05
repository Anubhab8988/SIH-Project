import { Users, Heart, Cake, Box, Grid3x3, Sun, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import type { GameDefinition } from '../types'

const iconMap = { users: Users, heart: Heart, cake: Cake, box: Box, grid: Grid3x3, sun: Sun }

export default function GameCard({ game, onPlay }: { game: GameDefinition; onPlay: () => void }) {
  const Icon = iconMap[game.icon]
  return (
    <motion.button
      whileHover={game.implemented ? { y: -3 } : {}}
      onClick={game.implemented ? onPlay : undefined}
      disabled={!game.implemented}
      className={`text-left bg-white rounded-xl2 border border-sky-100 shadow-card p-5 flex flex-col gap-3 min-h-[44px] transition-shadow ${
        game.implemented ? 'hover:shadow-soft cursor-pointer' : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
        <Icon size={22} />
      </div>
      <div>
        <p className="font-display font-semibold text-navy-700 flex items-center gap-2">
          {game.title}
          {!game.implemented && <Lock size={14} className="text-navy-300" />}
        </p>
        <p className="text-sm text-navy-500 mt-1">{game.description}</p>
      </div>
      {game.implemented && (
        <span className="text-sm font-semibold text-sky-500 mt-auto">Play now →</span>
      )}
    </motion.button>
  )
}
