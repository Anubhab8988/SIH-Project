import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FamilyReminderMessage } from '../types'

const timeOptions = ['In 10 minutes', 'In 30 minutes', 'In 1 hour']

export default function FamilyReminder({
  reminder,
  onComplete,
  onSnooze,
}: {
  reminder: FamilyReminderMessage
  onComplete: (id: string) => void
  onSnooze: (id: string, time: string) => void
}) {
  const [showSnooze, setShowSnooze] = useState(false)
  const [confirmedDone, setConfirmedDone] = useState(false)

  const initials = reminder.from
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <motion.div layout className="bg-white rounded-xl2 border border-sky-100 shadow-card p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-full bg-lavender-400 text-white font-semibold flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <p className="font-semibold text-navy-700">{reminder.from}</p>
            <span className="text-xs text-navy-400">{reminder.relationship} · {reminder.time}</span>
          </div>
          <p className="text-navy-600 mt-1">{reminder.message}</p>

          {reminder.status === 'completed' ? (
            <p className="mt-3 text-sage-500 font-medium text-sm">
              {reminder.from}: Wonderful! Thank you for taking it.
            </p>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  onComplete(reminder.id)
                  setConfirmedDone(true)
                }}
                className="min-h-[44px] px-4 rounded-full bg-sage-500 text-white text-sm font-semibold hover:bg-sage-600 transition-colors"
              >
                Done
              </button>
              <button
                onClick={() => setShowSnooze((s) => !s)}
                className="min-h-[44px] px-4 rounded-full bg-cream-100 text-navy-600 text-sm font-semibold hover:bg-cream-200 transition-colors"
              >
                Remind me later
              </button>
            </div>
          )}

          <AnimatePresence>
            {showSnooze && !confirmedDone && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex flex-wrap gap-2 overflow-hidden"
              >
                {timeOptions.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      onSnooze(reminder.id, t)
                      setShowSnooze(false)
                    }}
                    className="min-h-[40px] px-3 rounded-full bg-sky-50 text-navy-600 text-sm font-medium hover:bg-sky-100"
                  >
                    {t}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
