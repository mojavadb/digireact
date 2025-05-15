import { Link } from "react-router-dom"

function CelebratedBrand({width, className, brand}) {
    return (
        <div className={`flex-shrink-0 ${brand.isHaveBorder? (className) : (null)} px-3 py-1 overflow-hidden d-flex align-items-center justify-content-center h-100`}>
            <Link to="">
                <img 
                src={brand.src} 
                alt={brand.alt}
                className="object-fit-contain d-inline-block" 
                height={width > 768 ? "110px" : "70px"} 
                width={width > 768 ? "110px" : "70px"}
                />
            </Link>  
        </div>
    )
}

export default CelebratedBrand
