import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import BrainlyImage from "../assets/brainly-image.png" 

export function Landing(){
    const navigate = useNavigate()
    return <div>
        <div className="flex justify-between px-5 md:px-20 py-5 items-center text-black">
            <p className="text-xl md:text-2xl font-bold ">100xBrainly</p>
            <div className="flex gap-4 md:gap-8 items-center"> 
            <div className="text:md md:text-xl font-medium"><Link to={'/signin'}>Signin</Link></div> 
            <Button title={'Register'} size="md" variant="dark" onClick={()=> navigate('/signup')}/>
            </div>
        </div>
        <div className="w-full flex justify-center mt-20">
            <div className="w-full px-10 md:w-1/2 text-center">
            <h1 className="text-4xl md:text-5xl font-bold flex flex-wrap mb-5">Get your life organized with Second Brain.</h1>
            <span className="text-sm md:text-xl text-gray-400">Second Brain is an all-in-one Notion system that tracks your goals, projects, notes, and everything in between.</span>
            <img src={BrainlyImage} alt="" />
            </div>
        </div>
        <div className="w-full flex gap-4 justify-end px-10 pb-2 md:pb-5">
            <div>
                <a href="https://github.com/karsh0/Brainly" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" className="w-6 md:w-8" />
                </a>
            </div>
            <div>
                <a href="https://x.com/Karan_tw" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" className="w-6 md:w-8" />
                </a>
            </div>
        </div>
    </div>
}