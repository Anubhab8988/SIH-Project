import type { FamilyMember } from '../types'

export default function FamilyMemberCard({ member }: { member: FamilyMember }) {
  return (
    <div className="bg-white rounded-xl2 border border-sky-100 shadow-card p-5 flex items-start gap-4">
      <div className={`w-14 h-14 rounded-full ${member.avatarColor} text-white font-display font-semibold text-lg flex items-center justify-center shrink-0`}>
        {member.initials}
      </div>
      <div className="min-w-0">
        <p className="font-display font-semibold text-navy-700">{member.name}</p>
        <p className="text-sm text-navy-500">{member.relationship} · {member.role}</p>
        <p className="text-sm text-navy-400 mt-2 leading-relaxed">{member.permissions}</p>
      </div>
    </div>
  )
}
