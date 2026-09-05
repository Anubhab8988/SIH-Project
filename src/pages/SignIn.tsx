import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'
import AuthLayout from './AuthLayout'

export default function SignIn() {
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('123456')
  const [loading, setLoading] = useState(false)
  const { signIn, enterDemo } = useApp()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await signIn(email, password)
    setLoading(false)
    navigate('/app/home')
  }

  return (
    <AuthLayout>
      <Link to="/" className="inline-flex items-center gap-1 text-navy-400 hover:text-navy-600 text-sm mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Welcome back</h1>
      <p className="text-navy-500 mt-2">Sign in to see how your loved one is doing today.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <Field label="Email" type="email" value={email} onChange={setEmail} />
        <Field label="Password" type="password" value={password} onChange={setPassword} />

        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[52px] rounded-full bg-navy-600 text-white font-semibold text-lg hover:bg-navy-700 transition-colors disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-navy-400">
        Demo credentials are pre-filled — any email/password works too.
      </div>

      <button
        onClick={async () => {
          await enterDemo()
          navigate('/app/home')
        }}
        className="mt-6 w-full min-h-[52px] rounded-full bg-cream-100 text-navy-600 font-semibold hover:bg-cream-200 transition-colors"
      >
        Try Demo Instead
      </button>

      <p className="mt-6 text-center text-sm text-navy-400">
        New here?{' '}
        <Link to="/signup" className="text-navy-600 font-semibold">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}

function Field({
  label,
  type,
  value,
  onChange,
}: {
  label: string
  type: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full min-h-[48px] px-4 rounded-xl border border-sky-200 focus:border-sky-400 outline-none text-navy-700"
        required
      />
    </label>
  )
}
