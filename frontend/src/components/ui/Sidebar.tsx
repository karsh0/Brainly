import { useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"
import { LinkIcon } from "../Icons/LinkIcon"
import { TagsIcon } from "../Icons/TagsIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { VideoIcon } from "../Icons/VideoIcon"
import { Button } from "./Button"
import { DocumentIcon } from "../Icons/DocumentIcon"


export const Sidebar = () =>{
    const navigate = useNavigate()
    return <div className="w-full h-full pt-8 p-4 md:pt-5 md:p-6 lg:pr-10 border-r-2 border-gray-200">
        <div className="flex justify-between items-center h-[10%] pb-10"><BrainIcon/><h2 className="text-xl text-bold text-black  lg:text-2xl">Second Brain</h2></div>
        <div className="flex flex-col justify-between h-[90%]">
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center cursor-pointer">
            <TweetIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-black "> Tweets</p>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
            <VideoIcon />
            <p className="text:md lg:text-lg text-black "> Video</p>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
            <DocumentIcon/>
            <p className="text:md lg:text-lg text-black "> Documents</p>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
            <LinkIcon />
            <p className="text:md lg:text-lg text-black "> Links</p>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
            <TagsIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-black "> Tags</p>
            </div>
        </div>
            <div><Button size="md" variant="danger" title={"Logout"} fullWidth={true} onClick={()=>{
                localStorage.setItem('token','')
                navigate('/signin')
            }}/></div>
        </div>
    </div>
}