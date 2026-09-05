import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, PartyPopper } from 'lucide-react'
import GameCard from '../components/GameCard'
import GameQuestion from '../components/GameQuestion'
import { games } from '../data/mockData'
import { useApp } from '../context/AppContext'
import type { GameDefinition } from '../types'

export default function Games() {
  const [activeGame, setActiveGame] = useState<GameDefinition | null>(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const { registerGameCompleted, pushToast } = useApp()

  function startGame(game: GameDefinition) {
    setActiveGame(game)
    setQuestionIndex(0)
    setScore(0)
    setFinished(false)
  }

  function handleAnswered(correct: boolean) {
    if (correct) setScore((s) => s + 1)
    if (!activeGame) return
    if (questionIndex + 1 < activeGame.questions.length) {
      setQuestionIndex((i) => i + 1)
    } else {
      setFinished(true)
      registerGameCompleted()
      pushToast('Great job — game completed!')
    }
  }

  if (activeGame) {
    return (
      <div>
        <button
          onClick={() => setActiveGame(null)}
          className="inline-flex items-center gap-1.5 text-navy-500 hover:text-navy-700 font-medium mb-6 min-h-[44px]"
        >
          <ArrowLeft size={18} /> Back to Games
        </button>

        <h1 className="font-display text-2xl font-semibold text-navy-700 mb-1">{activeGame.title}</h1>
        <p className="text-navy-500 mb-8">
          Question {Math.min(questionIndex + 1, activeGame.questions.length)} of {activeGame.questions.length}
        </p>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={activeGame.questions[questionIndex].id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
            >
              <GameQuestion question={activeGame.questions[questionIndex]} onAnswered={handleAnswered} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl2 border border-sky-100 shadow-soft p-10 max-w-lg mx-auto text-center"
            >
              <PartyPopper className="mx-auto text-sage-500 mb-3" size={40} />
              <p className="font-display text-2xl font-semibold text-navy-700">Well done!</p>
              <p className="text-navy-500 mt-2">
                You scored {score} out of {activeGame.questions.length}.
              </p>
              <button
                onClick={() => setActiveGame(null)}
                className="mt-6 min-h-[48px] px-6 rounded-full bg-navy-600 text-white font-semibold hover:bg-navy-700"
              >
                Back to Games
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Cognitive Games</h1>
      <p className="text-navy-500 mt-1">A few gentle minutes of play, chosen just for you.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onPlay={() => startGame(game)} />
        ))}
      </div>
    </div>
  )
}
