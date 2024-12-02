import { useRef, useState } from "react";
import { CrossIcon } from "../components/Icons/CrossIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}: {open:boolean, onClose: ()=> void} ) {
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()


    const [type, setType] = useState(ContentType.Youtube)

    async function handleAddContent(){
        const title = titleRef.current?.value
        const link = linkRef.current?.value
        
        await axios.post(BACKEND_URL + "/api/v1/content" ,{
            title, link, type
        },{
            headers:{
                "Authorization": localStorage.getItem('token')
            }
        })
        onClose()
    }
  return (
    <div>
    {open && 
    <div>
    <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center"></div>
    <div className="w-screen h-screen bg-gray-600 opacity-90 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center opacity-100">
            <span className="bg-white p-4 rounded-md  cursor-pointer">
                <div className="flex justify-end">
                    <div onClick={onClose}>
                        <CrossIcon/>
                    </div>
                </div>
            <div>
                <Input reference={titleRef} placeholder={"Title"}/>
                <Input reference={linkRef} placeholder={"Link"}/>
                <div className="flex justify-between gap-4 p-2">
                <Button onClick={()=>{
                    setType(ContentType.Youtube)
                }} size={"md"} variant={type === ContentType.Youtube ? "primary" : "secondary"} title={"Youtube"} fullWidth={true}/>
                <Button onClick={()=>{
                    setType(ContentType.Twitter)
                }} size={"md"} variant={type === ContentType.Twitter ? "primary" : "secondary"} title={"Twitter"} fullWidth={true}/>
                </div>
                <div className="flex justify-center">
                <Button onClick={handleAddContent} size={"md"} variant={"primary"} title={"Submit"} fullWidth={true}/>
                </div>
            </div>
            </span>
        </div>
    </div>
    </div>}
    </div>
  )
}

