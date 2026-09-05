import { Puzzle, Target, ListChecks, Images } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import ProgressChart from '../components/ProgressChart'
import { weeklyEngagement, progressStats } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function Progress() {
  const { gamesCompletedToday } = useApp()

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Progress</h1>
      <p className="text-navy-500 mt-1">Cognitive activity and engagement over time.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <DashboardCard
          icon={Puzzle}
          label="Games Completed"
          value={`${progressStats.gamesCompleted + gamesCompletedToday}`}
          accent="lavender"
        />
        <DashboardCard
          icon={Target}
          label="Average Game Accuracy"
          value={`${progressStats.averageAccuracy}%`}
          accent="sky"
        />
        <DashboardCard
          icon={ListChecks}
          label="Activity Completion"
          value={`${progressStats.activityCompletion}%`}
          accent="sage"
        />
        <DashboardCard
          icon={Images}
          label="Memory Engagement"
          value={`${progressStats.memoryEngagementMinutes} min`}
          accent="clay"
        />
      </div>

      <div className="mt-6">
        <ProgressChart data={weeklyEngagement} title="Weekly Engagement" />
      </div>

      <p className="text-xs text-navy-400 mt-6 max-w-2xl leading-relaxed">
        This prototype demonstrates activity and engagement tracking and is not a medical
        diagnostic tool.
      </p>
    </div>
  )
}
