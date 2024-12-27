import axios from "axios"
import { Card } from "../components/ui/Card"
import { BACKEND_URL } from "../config"
import { useContents } from "../hooks/useContents"

export function DocumentPage(){
    const contents = useContents()

    async function handleDelete(link: any){
        const res = await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            data:{
                link
            }
        })
        console.log(res.data)
    }

    return <div>
        <div className="flex gap-2 flex-wrap">
                  {contents.map(({ title, content, type, link, tags }) => (
                    <Card
                      key={link}
                      title={title}
                      content={content}
                      link={link}
                      type={type}
                      tags={tags}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
    </div>
}