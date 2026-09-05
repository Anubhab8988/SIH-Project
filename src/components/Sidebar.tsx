import { NavLink } from 'react-router-dom'
import {
  Home,
  Sparkles,
  Puzzle,
  ListChecks,
  Images,
  Users,
  TrendingUp,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const navItems = [
  { to: '/app/home', label: 'Home', icon: Home },
  { to: '/app/companion', label: 'AI Companion', icon: Sparkles },
  { to: '/app/games', label: 'Cognitive Games', icon: Puzzle },
  { to: '/app/activities', label: 'Daily Activities', icon: ListChecks },
  { to: '/app/memories', label: 'Memories', icon: Images },
  { to: '/app/family', label: 'Family Circle', icon: Users },
  { to: '/app/progress', label: 'Progress', icon: TrendingUp },
]

export default function Sidebar() {
  const { user } = useApp()

  return (
    <>
      {/* Desktop / tablet sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-white border-r border-sky-100 h-screen sticky top-0 px-4 py-6">
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-9 h-9 rounded-full bg-navy-600 flex items-center justify-center">
            <Sparkles className="text-cream-100" size={18} />
          </div>
          <span className="font-display text-xl font-semibold text-navy-700">NeuroPlay</span>
        </div>

        <nav className="flex-1 space-y-1" aria-label="Main navigation">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl min-h-[48px] font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-50 text-navy-700 border border-sky-100'
                    : 'text-navy-500 hover:bg-cream-100'
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 flex items-center gap-3 px-3 py-3 rounded-xl bg-cream-100">
          <div className="w-10 h-10 rounded-full bg-lavender-400 flex items-center justify-center text-white font-semibold">
            {(user?.name ?? 'A').charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy-700 truncate">{user?.name ?? 'Anubhab'}</p>
            <p className="text-xs text-navy-400 truncate">Caregiver</p>
          </div>
        </div>
      </aside>

      {/* Mobile bottom navigation */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-sky-100 flex justify-around py-1.5 px-1"
        aria-label="Main navigation"
      >
        {navItems.slice(0, 5).map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-lg min-w-[52px] min-h-[48px] ${
                isActive ? 'text-navy-700' : 'text-navy-400'
              }`
            }
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium leading-none">{label.split(' ')[0]}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
