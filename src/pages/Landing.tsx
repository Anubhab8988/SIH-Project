import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, Heart, Images, Puzzle } from 'lucide-react'
import { motion } from 'framer-motion'
import CompanionCharacter from '../components/CompanionCharacter'
import { useApp } from '../context/AppContext'

export default function Landing() {
  const navigate = useNavigate()
  const { enterDemo } = useApp()

  async function handleTryDemo() {
    await enterDemo()
    navigate('/app/home')
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <header className="flex items-center justify-between px-6 sm:px-10 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-navy-600 flex items-center justify-center">
            <Sparkles className="text-cream-100" size={18} />
          </div>
          <span className="font-display text-xl font-semibold text-navy-700">NeuroPlay</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/signin"
            className="min-h-[44px] px-4 flex items-center text-navy-600 font-semibold hover:text-navy-700"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="min-h-[44px] px-5 flex items-center rounded-full bg-navy-600 text-white font-semibold hover:bg-navy-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 pt-8 sm:pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-700 leading-tight">
            A gentle companion for memory, moments, and family.
          </h1>
          <p className="mt-5 text-lg text-navy-500 leading-relaxed max-w-md">
            NeuroPlay helps people living with memory changes stay connected to their day, their
            loved ones, and their favourite memories — with family always close by.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleTryDemo}
              className="min-h-[52px] px-7 rounded-full bg-navy-600 text-white font-semibold text-lg hover:bg-navy-700 transition-colors shadow-soft"
            >
              Try Demo
            </button>
            <Link
              to="/signin"
              className="min-h-[52px] px-7 flex items-center rounded-full bg-white border border-navy-200 text-navy-600 font-semibold text-lg hover:bg-cream-50 transition-colors"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Feature icon={Heart} label="Family reminders" />
            <Feature icon={Puzzle} label="Gentle games" />
            <Feature icon={Images} label="Cherished memories" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-lavender-100 to-sage-100 rounded-[3rem] -z-10" />
          <div className="py-16">
            <CompanionCharacter mood="happy" size={260} />
          </div>
        </motion.div>
      </main>
    </div>
  )
}

function Feature({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-navy-500">
        <Icon size={22} />
      </div>
      <span className="text-xs font-medium text-navy-500">{label}</span>
    </div>
  )
}
