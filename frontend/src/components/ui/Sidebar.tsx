import { BrainIcon } from "../Icons/BrainIcon"
import { LinkIcon } from "../Icons/LinkIcon"
import { TagsIcon } from "../Icons/TagsIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { VideoIcon } from "../Icons/VideoIcon"


export const Sidebar = () =>{
    return <div className="w-fit md:w-1/5 h-screen pt-8 p-4 md:pt-5 md:p-6 lg:pr-10 border-r-2 border-gray-200">
        <div className="flex justify-between items-center mb-10"><BrainIcon/><h2 className="text-xl text-bold text-gray-700 hidden md:block lg:text-2xl">Second Brain</h2></div>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
            <TweetIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-gray-700 hidden md:block"> Tweets</p>
            </div>
            <div className="flex gap-4 items-center">
            <VideoIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-gray-700 hidden md:block"> Video</p>
            </div>
            <div className="flex gap-4 items-center">
            <TweetIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-gray-700 hidden md:block"> Documents</p>
            </div>
            <div className="flex gap-4 items-center">
            <LinkIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-gray-700 hidden md:block"> Links</p>
            </div>
            <div className="flex gap-4 items-center">
            <TagsIcon size={"lg"}/>
            <p className="text:md lg:text-lg text-gray-700 hidden md:block"> Tags</p>
            </div>
        </div>
    </div>
}