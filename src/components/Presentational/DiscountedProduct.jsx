import { Link } from "react-router-dom"

function DiscountedProduct({product}) {
    return (
        <div className={`px-4 py-3`}>
            <Link to="" className="text-black text-decoration-none">
                <div>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <img 
                        src={product.imageSrc}
                        alt={product.price}
                        width="100px"
                        height="100px"
                        />
                    </div>
                    <div className="d-flex flex-column align-items-stretch justify-content-between pt-1">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="bg-danger text-white rounded-3 py-0 px-1 fs-12px">
                                {product.off}
                            </div>
                            <div>
                                <span className="fs-12px fw-bold px-1">
                                    {product.price}
                                </span>
                                <span className="fs-12px">
                                    تومان
                                </span>
                            </div>
                        </div>
                        <div className="px-4 fs-12px text-secondary d-flex justify-content-end">
                            <del>{product.preprice}</del>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DiscountedProduct
