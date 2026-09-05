import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'
import AuthLayout from './AuthLayout'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useApp()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await signUp(name, email, password)
    setLoading(false)
    navigate('/app/home')
  }

  return (
    <AuthLayout>
      <Link to="/" className="inline-flex items-center gap-1 text-navy-400 hover:text-navy-600 text-sm mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="font-display text-3xl font-semibold text-navy-700">Create your account</h1>
      <p className="text-navy-500 mt-2">Set up a caregiver account to stay connected.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <Field label="Full Name" type="text" value={name} onChange={setName} placeholder="Anubhab Sen" />
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="Create a password" />

        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[52px] rounded-full bg-navy-600 text-white font-semibold text-lg hover:bg-navy-700 transition-colors disabled:opacity-60"
        >
          {loading ? 'Creating account…' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-navy-400">
        Already have an account?{' '}
        <Link to="/signin" className="text-navy-600 font-semibold">
          Sign in
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
  placeholder,
}: {
  label: string
  type: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy-600">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full min-h-[48px] px-4 rounded-xl border border-sky-200 focus:border-sky-400 outline-none text-navy-700"
        required
      />
    </label>
  )
}
