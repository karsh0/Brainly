import { ShareIcon } from "../Icons/ShareIcon"
import { DocumentIcon } from "../Icons/DocumentIcon"
import DeleteIcon from "../Icons/DeleteIcon"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import { VideoIcon } from "../Icons/VideoIcon"

interface CardInterface{
    title: String,
    content: String,
    link: String,
    type: "Youtube" | "Twitter",
}

export const Card = ({link, title, type, content}: CardInterface) => {

    async function deleteCard(){
        await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": localStorage.getItem('token')
            },data:{
                link
            }
        })
        alert("post deleted")
    }

    return(
        <div>
        <div className="max-w-72 rounded-xl border border-gray-300 p-3 min-h-48">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center"> 
                    {type == "Youtube" ? <VideoIcon/> : <DocumentIcon/>}
                    <p className="text-xl text-md">{title}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div onClick={async()=>{
                      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                        share: true
                      },{
                        headers:{
                          "Authorization": localStorage.getItem('token')
                        }
                      })
                      const shareUrl = response.data.hash
                      alert(`http://localhost:5173/brain/share/${shareUrl}`)
                    }}> 
                    <ShareIcon/>
                    </div>
                    <div onClick={deleteCard}>
                    <DeleteIcon/>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "Youtube" && <iframe className="w-full p-2"  src={link.replace("watch", "embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "Twitter" &&  <blockquote className="twitter-tweet">
                  <a href={link.replace('x.com', 'twitter.com')}></a> 
                </blockquote>}            
            </div>
            <div className="text-xl text-black font-semibold">
                {content}
            </div>
        </div>
        </div>
    )
}


