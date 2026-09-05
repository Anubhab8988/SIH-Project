import { motion } from 'framer-motion'
import CompanionCharacter from '../components/CompanionCharacter'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl2 shadow-soft p-8 sm:p-10"
        >
          {children}
        </motion.div>

        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-sky-100 to-sage-100 rounded-[3rem] -z-10" />
          <div className="py-16">
            <CompanionCharacter mood="idle" size={220} />
          </div>
        </div>
      </div>
    </div>
  )
}
