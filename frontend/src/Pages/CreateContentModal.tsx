import { useState } from "react";
import { CrossIcon } from "../components/Icons/CrossIcon";
import { Button } from "../components/ui/Button";


export function CreateContentModal({open, onClose} ) {
    
  return (
    <div>
    {open && <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center ">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer">
                <div className="flex justify-end">
                    <div onClick={onClose}>
                        <CrossIcon/>
                    </div>
                </div>
            <div>
                <Input placeholder={"Title"}/>
                <Input placeholder={"Link"}/>
                <div className="flex justify-center">
                <Button size={"md"} variant={"primary"} title={"Submit"}/>
                </div>
            </div>
            </span>
        </div>
    </div>}
    </div>
  )
}

function Input({onChange, placeholder}: {onChange : ()=> void, placeholder: string}){
    return <div>
        <input type="text" placeholder={placeholder} onChange={onChange} className="p-2 m-2 border rounded w-72 text-black"/>
    </div>
}
