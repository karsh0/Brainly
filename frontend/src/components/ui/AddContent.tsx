import { useState } from "react"
import { Sidebar } from "./Sidebar"

export const AddContent = () =>{

  const [type, setType] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [media, setMedia] = useState("")
  const [responseMessage, setResponseMessage] = useState('');

  async function handleOnSubmit(e: any){
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:3000/api/v1/content", {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title,content }),
  });

  const data = await res.json()
  setResponseMessage(data.message);
} catch (error) {
    console.error('Error:', error);
    setResponseMessage('Failed to send data.');
}
};

  return <div className="flex text-gray-700">
  <Sidebar/>
     <div className="max-w-full w-full p-10">
       <div className="flex flex-col gap-4 justify-between pb-5">
         <h1 className="text-3xl text-bold">Add your content</h1>
          <form action="" className="text-xl flex flex-col gap-3" onSubmit={handleOnSubmit}>
          <div>
            <span>Type: </span><select name="type" id="type" className="p-2 border-1 border-slate-600">
            <option value={"Tweet"}>Tweet</option>
            <option value={"Video"}>Video</option>
            <option value={"Documents"}>Documents</option>
            <option value={"Links"}>Links</option>
            <option value={"Tags"}>Tags</option>
            </select>
            </div>
            <div><span>Title: </span><input type="text" className="p-2 outline-1 " placeholder="Enter the title.." onChange={(e)=> setTitle(e.target.value)} /></div>
            <div className="flex flex-col gap-2"><span>Content: </span><textarea className="p-2" name="content" rows={8} cols={30} placeholder="Enter the content.." onChange={(e)=> setContent(e.target.value)} /></div>
            <div><span>Media: </span><input type="file" /></div>
            <button type="submit">Submit</button>
          </form>
         </div>
     </div>
   </div>
}