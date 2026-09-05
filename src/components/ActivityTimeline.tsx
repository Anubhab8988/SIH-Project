import { Sunrise, Pill, Footprints, Utensils, Droplet, Moon, Users, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import type { RoutineItem } from '../types'

const iconMap = {
  sunrise: Sunrise,
  pill: Pill,
  footprints: Footprints,
  utensils: Utensils,
  droplet: Droplet,
  moon: Moon,
  users: Users,
}

const statusStyles: Record<RoutineItem['status'], string> = {
  completed: 'bg-sage-100 text-sage-500',
  upcoming: 'bg-sky-50 text-sky-500',
  missed: 'bg-clay-400/10 text-clay-500',
}

const statusLabel: Record<RoutineItem['status'], string> = {
  completed: 'Completed',
  upcoming: 'Upcoming',
  missed: 'Missed',
}

export default function ActivityTimeline({
  items,
  onComplete,
}: {
  items: RoutineItem[]
  onComplete: (id: string) => void
}) {
  return (
    <ol className="relative space-y-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <motion.li
            key={item.id}
            layout
            className="flex items-center gap-4 bg-white border border-sky-100 rounded-xl2 shadow-card px-4 sm:px-5 py-4"
          >
            <div className="w-11 h-11 rounded-full bg-cream-100 flex items-center justify-center text-navy-500 shrink-0">
              <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-navy-700">{item.title}</p>
              <p className="text-sm text-navy-400">{item.time}</p>
            </div>
            <span
              className={`hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[item.status]}`}
            >
              {statusLabel[item.status]}
            </span>
            {item.status !== 'completed' ? (
              <button
                onClick={() => onComplete(item.id)}
                className="min-h-[44px] px-4 rounded-full bg-navy-600 text-white text-sm font-semibold hover:bg-navy-700 transition-colors shrink-0"
              >
                Mark Done
              </button>
            ) : (
              <span className="w-9 h-9 rounded-full bg-sage-500 text-white flex items-center justify-center shrink-0">
                <Check size={18} />
              </span>
            )}
          </motion.li>
        )
      })}
    </ol>
  )
}
