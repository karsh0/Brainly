import { BrainIcon } from "../Icons/BrainIcon"
import { LinkIcon } from "../Icons/LinkIcon"
import { TagsIcon } from "../Icons/TagsIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { VideoIcon } from "../Icons/VideoIcon"


export const Sidebar = () =>{
    return <div className="w-1/5 h-screen pt-5 p-8 pr-10 border-r-2 border-gray-200">
        <div className="flex justify-between items-center mb-10"><BrainIcon/><h2 className="text-2xl text-bold ">SecondBrain</h2></div>
        <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700 flex gap-4 items-center"><TweetIcon size={"lg"}/> Tweets</p>
            <p className="text-lg text-gray-700 flex gap-4 items-center"><VideoIcon size={"lg"}/> Video</p>
            <p className="text-lg text-gray-700 flex gap-4 items-center"><TweetIcon size={"lg"}/> Documents</p>
            <p className="text-lg text-gray-700 flex gap-4 items-center"><LinkIcon size={"lg"}/> Links</p>
            <p className="text-lg text-gray-700 flex gap-4 items-center"><TagsIcon size={"lg"}/> Tags</p>
        </div>
    </div>
}