import { Link } from "react-router-dom"

function Card({article}) {
    return (
        <article className="card m-3 m-lg-2">
            <Link to="" className="text-decoration-none">
                <img className="card-img-top" src={article.imageSrc} alt={article.text} />
                <div className="fs-14px p-2 pb-3 text-dark">
                    {article.text}
                </div>
            </Link>
        </article>
    )
}

export default Card
