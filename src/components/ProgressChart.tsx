import { motion } from 'framer-motion'
import type { WeeklyEngagementPoint } from '../types'

export default function ProgressChart({ data, title }: { data: WeeklyEngagementPoint[]; title: string }) {
  const max = 100
  return (
    <div className="bg-white rounded-xl2 border border-sky-100 shadow-card p-5 sm:p-6">
      <p className="font-display font-semibold text-navy-700 mb-1">{title}</p>
      <p className="text-xs text-navy-400 mb-5">Illustrative activity &amp; engagement, not a medical measurement.</p>
      <div className="flex items-end justify-between gap-2 sm:gap-3 h-40">
        {data.map((point, i) => (
          <div key={point.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <div className="w-full max-w-[28px] h-full flex items-end justify-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(point.value / max) * 100}%` }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                className="w-full rounded-t-lg bg-gradient-to-t from-sky-400 to-sky-300"
              />
            </div>
            <span className="text-xs font-medium text-navy-400">{point.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
