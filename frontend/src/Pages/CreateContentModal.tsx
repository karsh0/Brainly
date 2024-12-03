import { useRef, useState } from "react";
import { CrossIcon } from "../components/Icons/CrossIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    Link = "Link",
    Document = "Document"
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
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center"></div>
    <div className="w-screen h-screen bg-gray-600 bg-opacity-60 opacity-100 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center opacity-100 w-96">
            <span className="bg-white p-6 rounded-md w-full cursor-pointer">
                <div className="flex justify-between pb-2">
                <h3 className="text-[#676767] text-xl font-semibold">Create New Content</h3>
                    <div onClick={onClose}>
                        <CrossIcon/>
                    </div>
                </div>
            <div className="flex flex-col justify-start gap-4">
                <div>
                <label className="block text-[#676767] mb-2">Title</label>
                <Input reference={titleRef} placeholder={"15 Character limit"}/>
                </div>
                <div>
                <label className="block text-[#676767] mb-2">Link (Optional)</label>
                <Input reference={linkRef} placeholder={"Enter URL"}/>
                </div>
                
                <div>
                    <label className="block text-[#676767] mb-2">Type</label>
                    <select className="w-full border p-2 rounded-lg">
                        <option value="Video" onClick={(e)=> setType(e.target.value)}>Video</option>
                        <option value="Tweet" onClick={(e)=> setType(e.target.value)}>Tweet</option>
                        <option value="Link" onClick={(e)=> setType(e.target.value)}>Link</option>
                        <option value="Document" onClick={(e)=> setType(e.target.value)}>Document</option>
                    </select>
                </div>
                <div>
                <label className="block text-[#676767] mb-2">Tags</label>
                <Input reference={linkRef} placeholder={"Add a Tags"}/>
                </div>
                <div>
                <label className="block text-[#676767] mb-2">Content (Optional)</label>
                    <textarea className="border-gray-500 border w-full rounded p-2" rows={4} name="textarea" placeholder="Enter content details"></textarea>
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

