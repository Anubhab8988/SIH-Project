import { useEffect } from 'react'
import CompanionCharacter from '../components/CompanionCharacter'
import { useApp } from '../context/AppContext'
import { getCompanionResponse } from '../services/companionService'

export default function CompanionSection() {
  const { openCompanion } = useApp()

  useEffect(() => {
    getCompanionResponse('section_enter', { section: 'general' }).then((line) => openCompanion(line))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col items-center text-center py-10">
      <CompanionCharacter mood="idle" size={200} />
      <h1 className="font-display text-3xl font-semibold text-navy-700 mt-6">Meet Sunny</h1>
      <p className="text-navy-500 mt-2 max-w-md">
        Sunny is your companion for check-ins, gentle nudges, and a friendly chat throughout
        the day. Tap the floating companion any time — it&apos;s just opened for you now.
      </p>
    </div>
  )
}
