
export function Input({reference, placeholder}: {reference : any, placeholder: string}){
    return <div>
        <input ref={reference} type="text" placeholder={placeholder}  className="p-2 m-2 border rounded w-72 text-black"/>
    </div>
}