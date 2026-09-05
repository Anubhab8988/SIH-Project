import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function NotificationToast() {
  const { toasts, dismissToast } = useApp()

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 w-[92vw] max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-3 bg-white border border-sage-300/60 shadow-soft rounded-xl2 px-4 py-3"
            role="status"
          >
            <CheckCircle2 className="text-sage-500 shrink-0 mt-0.5" size={20} />
            <p className="text-sm font-medium text-navy-700 flex-1">{toast.message}</p>
            <button
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              className="text-navy-400 hover:text-navy-600 shrink-0"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
