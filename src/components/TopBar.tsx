import { useState } from 'react'
import { Settings, RotateCcw, Type, Contrast, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function TopBar() {
  const { largeText, toggleLargeText, highContrast, toggleHighContrast, resetDemo, signOut, isDemoMode } = useApp()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-20 bg-cream-100/90 backdrop-blur border-b border-sky-100/60">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        <div className="flex items-center gap-2">
          {isDemoMode && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-500 bg-sage-100 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500" /> DEMO MODE
            </span>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open settings"
            aria-expanded={open}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white text-navy-500 transition-colors"
          >
            <Settings size={22} />
          </button>

          {open && (
            <div
              className="absolute right-0 mt-2 w-72 bg-white rounded-xl2 shadow-soft border border-sky-100 p-3 space-y-1"
              role="menu"
            >
              <button
                onClick={toggleLargeText}
                role="menuitemcheckbox"
                aria-checked={largeText}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-cream-100 min-h-[44px]"
              >
                <span className="flex items-center gap-2 text-navy-700 font-medium">
                  <Type size={18} /> Large Text
                </span>
                <span
                  className={`w-11 h-6 rounded-full relative transition-colors ${
                    largeText ? 'bg-sage-500' : 'bg-navy-100'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      largeText ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </span>
              </button>

              <button
                onClick={toggleHighContrast}
                role="menuitemcheckbox"
                aria-checked={highContrast}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-cream-100 min-h-[44px]"
              >
                <span className="flex items-center gap-2 text-navy-700 font-medium">
                  <Contrast size={18} /> High Contrast
                </span>
                <span
                  className={`w-11 h-6 rounded-full relative transition-colors ${
                    highContrast ? 'bg-sage-500' : 'bg-navy-100'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      highContrast ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </span>
              </button>

              <div className="h-px bg-sky-100 my-1" />

              <button
                onClick={resetDemo}
                className="w-full flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-cream-100 min-h-[44px] text-navy-600 font-medium"
              >
                <RotateCcw size={18} /> Reset Demo
              </button>

              <button
                onClick={() => {
                  signOut()
                  navigate('/')
                }}
                className="w-full flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-cream-100 min-h-[44px] text-clay-500 font-medium"
              >
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
