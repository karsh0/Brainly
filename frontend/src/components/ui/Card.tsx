
interface CardInterface{
    title: String,
    content: String,
    tags?: [],
    date: String
}

export const Card = (props: CardInterface) => {
    return <div className="w-fit max-w-72 p-3 rounded-md border-2 border-gray-200">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p>{props.content}</p>
        <p>{props.date}</p>
    </div>

}


