import { Dialog } from './components/ui/dialog'

// import { EmptyGoals } from './components/empty-goals'
import { CreateGoal } from './components/create-goals'
import { Summary } from './components/summary'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <CreateGoal />
      <Summary />
    </Dialog>
  )
}
