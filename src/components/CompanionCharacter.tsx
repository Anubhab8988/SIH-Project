import { motion } from 'framer-motion'

export type CompanionMood = 'idle' | 'speaking' | 'happy' | 'thinking'

interface Props {
  mood?: CompanionMood
  size?: number
}

/**
 * A friendly illustrated owl companion, rendered as inline SVG so it can be
 * animated with Framer Motion (breathing, blinking, head tilt, speaking).
 * Swap this file out later for a different character without touching any
 * layout code — FloatingCompanion and CompanionPanel only import this.
 */
export default function CompanionCharacter({ mood = 'idle', size = 120 }: Props) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <motion.svg
        viewBox="0 0 200 220"
        width="100%"
        height="100%"
        animate={
          mood === 'thinking'
            ? { rotate: [-3, 3, -3] }
            : mood === 'speaking'
            ? { rotate: [0, 1.5, 0, -1.5, 0] }
            : { rotate: [0, 1, 0, -1, 0] }
        }
        transition={{ duration: mood === 'thinking' ? 2.6 : 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Body */}
        <ellipse cx="100" cy="140" rx="72" ry="66" fill="#E8D9C4" />
        {/* Wing shading */}
        <path d="M40 120 Q20 160 45 195 Q65 205 78 190 Q55 170 60 130 Z" fill="#B98B5E" opacity="0.85" />
        <path d="M160 120 Q180 160 155 195 Q135 205 122 190 Q145 170 140 130 Z" fill="#B98B5E" opacity="0.85" />
        {/* Scarf */}
        <path
          d="M45 150 Q100 178 155 150 L150 178 Q100 200 50 178 Z"
          fill="#6B3F49"
        />
        <path d="M90 178 L84 210 L100 202 L116 210 L110 178 Z" fill="#6B3F49" />
        <rect x="86" y="182" width="28" height="4" fill="#C9A24B" opacity="0.7" />
        {/* Head */}
        <circle cx="100" cy="88" r="62" fill="#F1E6D6" />
        <path d="M45 60 Q55 20 85 35 Q70 45 62 66 Z" fill="#B98B5E" />
        <path d="M155 60 Q145 20 115 35 Q130 45 138 66 Z" fill="#B98B5E" />
        {/* Face mask */}
        <ellipse cx="100" cy="98" rx="46" ry="40" fill="#FBF4E9" />
        {/* Eyes */}
        <circle cx="78" cy="92" r="20" fill="#FFFFFF" stroke="#8A5A34" strokeWidth="3" />
        <circle cx="122" cy="92" r="20" fill="#FFFFFF" stroke="#8A5A34" strokeWidth="3" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.95, 0.98, 1] }}
          style={{ transformOrigin: '78px 92px' }}
        >
          <circle cx="78" cy="92" r="9" fill="#7A4A22" />
          <circle cx="81" cy="88" r="3" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.95, 0.98, 1] }}
          style={{ transformOrigin: '122px 92px' }}
        >
          <circle cx="122" cy="92" r="9" fill="#7A4A22" />
          <circle cx="125" cy="88" r="3" fill="#FFFFFF" />
        </motion.g>
        {/* Glasses */}
        <circle cx="78" cy="92" r="23" fill="none" stroke="#8A6A2F" strokeWidth="3.5" />
        <circle cx="122" cy="92" r="23" fill="none" stroke="#8A6A2F" strokeWidth="3.5" />
        <line x1="101" y1="90" x2="99" y2="90" stroke="#8A6A2F" strokeWidth="3.5" />
        {/* Beak */}
        <motion.path
          d="M92 108 Q100 120 108 108 Q100 128 92 108 Z"
          fill="#E0A052"
          animate={
            mood === 'speaking'
              ? { d: ['M92 108 Q100 120 108 108 Q100 128 92 108 Z', 'M92 108 Q100 126 108 108 Q100 132 92 108 Z', 'M92 108 Q100 120 108 108 Q100 128 92 108 Z'] }
              : {}
          }
          transition={{ duration: 0.6, repeat: mood === 'speaking' ? Infinity : 0 }}
        />
        {/* Feet */}
        <path d="M78 205 l-6 10 M78 205 l0 12 M78 205 l6 10" stroke="#E0A052" strokeWidth="4" strokeLinecap="round" />
        <path d="M122 205 l-6 10 M122 205 l0 12 M122 205 l6 10" stroke="#E0A052" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>

      {mood === 'happy' && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 0], y: -18, scale: 1 }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
          className="absolute -top-2 right-2 text-lg"
          aria-hidden
        >
          ✨
        </motion.div>
      )}
    </motion.div>
  )
}
