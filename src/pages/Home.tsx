import { useEffect } from 'react'
import { ListChecks, Puzzle, Images, Bell, TrendingUp } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import ProgressChart from '../components/ProgressChart'
import { useApp } from '../context/AppContext'
import { weeklyEngagement, progressStats, patientProfile } from '../data/mockData'

export default function Home() {
  const { user, routine, activitiesCompletedToday, familyReminders, gamesCompletedToday } = useApp()

  const upcomingReminders = familyReminders.filter((r) => r.status !== 'completed').length

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-navy-700">
        Good Morning, {user?.name ?? 'Anubhab'}
      </h1>
      <p className="text-navy-500 mt-1">
        Here&apos;s how {patientProfile.name} is doing today.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <DashboardCard
          icon={ListChecks}
          label="Today's Activities"
          value={`${activitiesCompletedToday} / ${routine.length} completed`}
          accent="sky"
        />
        <DashboardCard
          icon={Puzzle}
          label="Cognitive Games"
          value={`${gamesCompletedToday + progressStats.gamesCompleted} completed`}
          accent="lavender"
        />
        <DashboardCard
          icon={Images}
          label="Memory Engagement"
          value={`${progressStats.memoryEngagementMinutes} min`}
          accent="sage"
        />
        <DashboardCard
          icon={Bell}
          label="Reminders"
          value={`${upcomingReminders} upcoming`}
          accent="clay"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <ProgressChart data={weeklyEngagement} title="Activity & Engagement This Week" />
        </div>
        <div className="bg-white rounded-xl2 border border-sky-100 shadow-card p-6 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-500 flex items-center justify-center mb-3">
            <TrendingUp size={26} />
          </div>
          <p className="font-display text-xl font-semibold text-navy-700">Good</p>
          <p className="text-sm text-navy-500 mt-1">Overall engagement this week</p>
        </div>
      </div>
    </div>
  )
}
