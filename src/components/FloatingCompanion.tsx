import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CompanionCharacter from './CompanionCharacter'
import CompanionPanel from './CompanionPanel'
import { useApp } from '../context/AppContext'

export default function FloatingCompanion() {
  const { companionOpen, openCompanion, closeCompanion } = useApp()
  const [showBubble, setShowBubble] = useState(true)

  return (
    <>
      <AnimatePresence>{companionOpen && <CompanionPanel key="panel" />}</AnimatePresence>

      <div className="fixed bottom-4 right-4 sm:right-6 z-40 flex flex-col items-end gap-1">
        <AnimatePresence>
          {!companionOpen && showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="mr-1 mb-1 bg-white rounded-2xl rounded-br-sm shadow-card px-4 py-2 text-sm text-navy-600 border border-sky-100 max-w-[220px]"
            >
              Hi! I&apos;m Sunny — tap me any time.
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setShowBubble(false)
            companionOpen ? closeCompanion() : openCompanion()
          }}
          whileTap={{ scale: 0.92 }}
          aria-label={companionOpen ? 'Close companion Sunny' : 'Open companion Sunny'}
          className="rounded-full bg-white/70 backdrop-blur shadow-soft p-1 border border-sky-100 hover:shadow-lg transition-shadow"
        >
          <CompanionCharacter mood="idle" size={84} />
        </motion.button>
      </div>
    </>
  )
}
