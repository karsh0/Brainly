import { PlusIcon } from "./components/Icons/PlusIcon"
import { ShareIcon } from "./components/Icons/ShareIcon"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"
import { Sidebar } from "./components/ui/Sidebar"

function App() {
 

  return (
    <div className="flex text-gray-700">
   <Sidebar/>
      <div className="max-w-full w-full p-10">
        <div className="flex justify-between pb-5">
          <h1 className="text-3xl text-bold">All Notes</h1>
          <div className="flex gap-2">
          <Button startIcon={<ShareIcon />} size="md" title={"Share brain"} variant={"secondary"}/>
          <Button startIcon={<PlusIcon />} size="md" title={"Add content"} variant={"primary"}/></div>
          </div>
          <Card title={"Productivity"} content={"this card talks about productivity this card talks about productivity this card talks about productivity"} date={"17/11/24"} />
      </div>
    </div>
  )
}

export default App
