import ActivityTimeline from '../components/ActivityTimeline'
import FamilyReminder from '../components/FamilyReminder'
import { useApp } from '../context/AppContext'

export default function Activities() {
  const { routine, completeRoutineItem, familyReminders, completeFamilyReminder, snoozeFamilyReminder } = useApp()

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Today&apos;s Routine</h1>
      <p className="text-navy-500 mt-1">A simple plan for the day, one gentle step at a time.</p>

      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <ActivityTimeline items={routine} onComplete={completeRoutineItem} />
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-700 mb-4">Messages from Family</h2>
          <div className="space-y-4">
            {familyReminders.map((reminder) => (
              <FamilyReminder
                key={reminder.id}
                reminder={reminder}
                onComplete={completeFamilyReminder}
                onSnooze={snoozeFamilyReminder}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
