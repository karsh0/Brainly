import { ShareIcon } from "../Icons/ShareIcon"
import { DocumentIcon } from "../Icons/DocumentIcon"
import DeleteIcon from "../Icons/DeleteIcon"
import axios from "axios"
import { BACKEND_URL } from "../../config"

interface CardInterface{
    title: String,
    link: String,
    type: "youtube" | "twitter",
}

export const Card = ({link, title, type}: CardInterface) => {

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
        <div className="max-w-72 rounded-xl border border-gray-300 p-2 min-h-48">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center"> 
                    <DocumentIcon/>
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
                {type === "youtube" && <iframe className="w-full p-2"  src={link.replace("watch", "embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "twitter" &&  <blockquote className="twitter-tweet">
                  <a href={link.replace('x.com', 'twitter.com')}></a> 
                </blockquote>}            
            </div>
        </div>
        </div>
    )
}


