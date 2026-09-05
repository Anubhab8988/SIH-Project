import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AppShell from './components/AppShell'
import Home from './pages/Home'
import Games from './pages/Games'
import Activities from './pages/Activities'
import Memories from './pages/Memories'
import FamilyCircle from './pages/FamilyCircle'
import Progress from './pages/Progress'
import CompanionSection from './pages/CompanionSection'
import { useApp } from './context/AppContext'

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useApp()
  if (!user) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/app"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="companion" element={<CompanionSection />} />
        <Route path="games" element={<Games />} />
        <Route path="activities" element={<Activities />} />
        <Route path="memories" element={<Memories />} />
        <Route path="family" element={<FamilyCircle />} />
        <Route path="progress" element={<Progress />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
