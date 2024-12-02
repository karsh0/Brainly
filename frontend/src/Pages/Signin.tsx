import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin = () =>{
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()

    async function handleSignin(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        await axios.post(BACKEND_URL + "/api/v1/signin" , {
            username,
            password
        })
        navigate('/dashboard')
    }
    return (
        <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center ">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer">
                <div className="flex justify-center text-2xl text-semibold">
                    Signin
                </div>
            <div>
                <Input reference={usernameRef} placeholder={"Username"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
                <div className="flex justify-center">
                <Button onClick={handleSignin} loading={false} size={"md"} variant={"primary"} title={"Submit"} fullWidth={true}/>
                </div>
            </div>
            </span>
        </div>
    </div>
    )
}