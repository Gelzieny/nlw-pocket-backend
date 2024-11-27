import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'

export function PendingGoals() {
  return (
    <div className="flex flex-wrap gap-3">
      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Meditar
      </OutlineButton>
      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Praticar exercício
      </OutlineButton>
      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Nadar
      </OutlineButton>
    </div>
  )
}