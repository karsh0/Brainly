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

        const response = await axios.post(BACKEND_URL + "/api/v1/signin" , {
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt)
        navigate('/dashboard')
    }
    return (
        <div className="w-screen h-screen bg-black opacity-90 fixed top-0 left-0 flex justify-center">
         <div className="flex flex-col justify-center w-72 md:w-96">
            <span className="bg-white p-5 md:p-8 rounded-md opacity-100 cursor-pointer">
                <div className="flex justify-center text-3xl text-semibold mb-4 font-semibold">
                    Signin
                </div>
            <div className="flex flex-col gap-4">
                <Input reference={usernameRef} placeholder={"Username"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
                <div className="flex justify-center">
                <Button onClick={handleSignin} loading={false} size={"md"} variant={"dark"} title={"Submit"} fullWidth={true}/>
                </div>
            </div>
            </span>
        </div>
    </div>
    )
}