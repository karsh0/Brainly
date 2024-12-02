import { CrossIcon } from "../components/Icons/CrossIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";


export function CreateContentModal({open, onClose}: {open:boolean, onClose: ()=> void} ) {
    
  return (
    <div>
    {open && <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center ">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer opacity-100">
                <div className="flex justify-end">
                    <div onClick={onClose}>
                        <CrossIcon/>
                    </div>
                </div>
            <div>
                <Input placeholder={"Title"}/>
                <Input placeholder={"Link"}/>
                <div className="flex justify-center">
                <Button size={"md"} variant={"primary"} title={"Submit"} fullWidth={true}/>
                </div>
            </div>
            </span>
        </div>
    </div>}
    </div>
  )
}

