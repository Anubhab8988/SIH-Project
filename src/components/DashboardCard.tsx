import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  icon: LucideIcon
  label: string
  value: string
  sublabel?: string
  accent?: 'sky' | 'sage' | 'lavender' | 'clay'
}

const accentMap = {
  sky: 'bg-sky-50 text-sky-500',
  sage: 'bg-sage-100 text-sage-500',
  lavender: 'bg-lavender-100 text-lavender-500',
  clay: 'bg-clay-400/10 text-clay-500',
}

export default function DashboardCard({ icon: Icon, label, value, sublabel, accent = 'sky' }: Props) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white rounded-xl2 border border-sky-100 shadow-card p-5 flex flex-col gap-3"
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center ${accentMap[accent]}`}>
        <Icon size={22} />
      </div>
      <div>
        <p className="text-2xl font-display font-semibold text-navy-700 leading-tight">{value}</p>
        <p className="text-sm text-navy-500 mt-0.5">{label}</p>
        {sublabel && <p className="text-xs text-navy-400 mt-1">{sublabel}</p>}
      </div>
    </motion.div>
  )
}
