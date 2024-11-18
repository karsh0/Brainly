import React, { ReactElement } from "react"

interface ButtonInterface{
    size: "sm" | "md" | "lg",
    startIcon? : ReactElement,
    endIcon? : ReactElement,
    title: String,
    variant:"primary" | "secondary"
}


const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-[#5046e5] text-white",
    "secondary": "bg-[#e0e7ff] text-purple-600",
}

export let size = "";

export const Button = ({size, startIcon, endIcon, title, variant}: ButtonInterface) =>{
    const startIconWithProps = startIcon ? React.cloneElement(startIcon, {size}) : null;
    const endIconWithProps = endIcon ? React.cloneElement(endIcon, {size}) : null;

    return  <button className={sizeStyles[size] + " " + variantStyles[variant] }>
    <div className="flex items-center">
        {startIconWithProps}
        <div className="pl-2 pr-2">
            {title}
        </div>
        {endIconWithProps}
    </div>
</button>
}