import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { GameQuestionData } from '../types'

export default function GameQuestion({
  question,
  onAnswered,
}: {
  question: GameQuestionData
  onAnswered: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)

  function handleSelect(optionId: string) {
    if (selected) return
    setSelected(optionId)
    const correct = optionId === question.correctOptionId
    setResult(correct ? 'correct' : 'incorrect')
    setTimeout(() => onAnswered(correct), 1400)
  }

  return (
    <div className="bg-white rounded-xl2 border border-sky-100 shadow-soft p-6 sm:p-8 max-w-lg mx-auto">
      {question.image && (
        <img
          src={question.image}
          alt=""
          className="w-32 h-32 rounded-full object-cover mx-auto mb-5 border-4 border-cream-100 shadow-card"
        />
      )}
      <p className="text-xl font-display font-semibold text-navy-700 text-center mb-6">
        {question.prompt}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((opt) => {
          const isSelected = selected === opt.id
          const isCorrectOpt = opt.id === question.correctOptionId
          const showState = selected !== null

          let styles = 'bg-cream-100 text-navy-700 hover:bg-sky-50'
          if (showState && isCorrectOpt) styles = 'bg-sage-100 text-sage-500 border-2 border-sage-500'
          else if (showState && isSelected && !isCorrectOpt) styles = 'bg-clay-400/10 text-clay-500 border-2 border-clay-400'

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={selected !== null}
              className={`min-h-[48px] px-4 py-3 rounded-xl font-semibold text-base transition-colors ${styles}`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center gap-2 justify-center text-center"
          >
            <Heart size={18} className="text-sage-500" />
            <p className="text-navy-600 font-medium">
              {result === 'correct' ? question.encouragement : "Not quite — that's okay. Let's try another one."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
