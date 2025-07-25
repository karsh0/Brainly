import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useContents = () =>{
    const [contents, setContents] = useState<any>([]);
    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers:{
                "Authorization": localStorage.getItem("token")
            },
        }).then((response) => setContents(response.data.content))
    },[])


    return contents
}