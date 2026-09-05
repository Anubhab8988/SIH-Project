import { UserPlus } from 'lucide-react'
import FamilyMemberCard from '../components/FamilyMemberCard'
import { familyMembers } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function FamilyCircle() {
  const { pushToast } = useApp()

  return (
    <div>
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy-700">Family Circle</h1>
          <p className="text-navy-500 mt-1">The people who help and stay connected.</p>
        </div>
        <button
          onClick={() => pushToast('Invite link copied (demo only).')}
          className="min-h-[48px] px-5 rounded-full bg-navy-600 text-white font-semibold flex items-center gap-2 hover:bg-navy-700 transition-colors"
        >
          <UserPlus size={18} /> Add Family Member
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {familyMembers.map((member) => (
          <FamilyMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
