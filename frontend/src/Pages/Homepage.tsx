import { useEffect, useState } from "react"
import { PlusIcon } from "../components/Icons/PlusIcon"
import { ShareIcon } from "../components/Icons/ShareIcon"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Sidebar } from "../components/ui/Sidebar"
import {CreateContentModal} from "./CreateContentModal"



export const Homepage = () =>{
  const [modalOpen, setModalOpen] = useState(false)


  return (    
    <div className="flex text-gray-700">
    <CreateContentModal open={modalOpen} onClose={() =>{
      setModalOpen(false)
    }}/>
    <Sidebar/>
    <div className="max-w-full w-full p-10">
      <div className="flex justify-between pb-5">
        <h1 className="text-3xl text-bold">All Notes</h1>
        <div className="flex gap-2">
        <Button startIcon={<ShareIcon />} size="md" title={"Share brain"} variant={"secondary"} />

        <Button startIcon={<PlusIcon />} onClick={() =>{
          setModalOpen(true)
        }} size="md" title={"Add content"} variant={"primary"}/>
        </div>
        </div>
        <div className="flex gap-2">
        <Card title="Youtube post" link={"https://www.youtube.com/watch?v=Tuw8hxrFBH8"} type="youtube"/>
        <Card title="Twitter post" link={"https://x.com/Karan_tw/status/1857843478719508663"} type="twitter"/>
        </div>
    </div>
  </div>
  )
}