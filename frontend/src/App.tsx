import { PlusIcon } from "./components/Icons/PlusIcon"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"

function App() {
 

  return (
    <>
    hello world
    <Button startIcon={<PlusIcon size="md" />} size="md" title={"Add content"} variant={"primary"}/>
    <Button startIcon={<PlusIcon size="md" />} size="md" title={"Share brain"} variant={"secondary"}/>
    <Card title={"Productivity"} content={"this card talks about productivity"} date={"20/10/24"} />
    </>
  )
}

export default App
