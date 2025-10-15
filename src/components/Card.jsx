export default function Card({title, price, rating, image}){
    return (
        <div className="rounded-2xl p-2 bg-gray-400 h-auto">
            <img src={image} alt="" className="h-50 justify-self-center"/>
            <h2 className="font-bold">{title}</h2>
            <h2 className="">★{rating.rate} ({rating.count})</h2>
            <h2>{price}</h2>
            <div className="flex justify-center">
                <button className="justify-self-center bg-amber-300 hover:bg-amber-400 hover:scale-105 p-2 rounded-2xl font-bold">Ver detalhes</button>
            </div>
        </div>
    )
}