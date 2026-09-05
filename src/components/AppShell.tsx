import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import FloatingCompanion from './FloatingCompanion'
import NotificationToast from './NotificationToast'

export default function AppShell() {
  return (
    <div className="flex min-h-screen bg-cream-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-4 sm:px-8 py-6 pb-24 md:pb-10 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
      <FloatingCompanion />
      <NotificationToast />
    </div>
  )
}
