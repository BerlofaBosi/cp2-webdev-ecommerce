export default function Card({title, price, image}){
    return (
        <div className="rounded-2xl p-1 bg-gray-400">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <div>
                <p>estrelas</p>
            </div>
            <h2>{price}</h2>
            <button>Ver detalhes</button>
        </div>
    )
}