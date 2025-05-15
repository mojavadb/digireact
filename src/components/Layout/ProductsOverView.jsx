import { Link } from 'react-router-dom'
import styles from './ProductsOverView.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function ProductsOverView({width, isLatest, product}) {
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />

    return (
        <div className={`p-2 
        ${!isLatest ? 
            (width > 768 ? "border-type-three" : "border-type-tow") :
            ""
        }`}>
            <div className='px-2 px-md-3'>
                <div className={`d-flex fw-bold w-100 align-items-center justify-content-between text-dark fs-6`}>
                    {product.title}
                </div>
                <p className="text-secondary fs-12px"> 
                    {product.description}
                </p>
            </div>
            <div className={`${styles.backGroundForBorder} d-flex flex-column ${styles.gap1px}`}>
                <div className={`d-flex flex-row ${styles.gap1px}`}>
                    <div className='p-2 p-sm-5 p-lg-4 bg-white flex-grow-1'>
                        <Link to="">
                            <img className="w-100" src={product.imagesSrc[0]} alt='image of product' />
                        </Link>
                    </div>
                    <div className='p-2 p-sm-5 p-lg-4 bg-white flex-grow-1'>
                        <Link to="">
                            <img className="w-100" src={product.imagesSrc[1]} alt='image of product' />
                        </Link>
                    </div>
                </div>
                <div className={`d-flex flex-row ${styles.gap1px}`}>
                    <div className='p-2 p-sm-5 p-lg-4 bg-white flex-grow-1'>
                        <Link to="">
                            <img className="w-100" src={product.imagesSrc[2]} alt='image of product' />
                        </Link>
                    </div>
                    <div className='p-2 p-sm-5 p-lg-4 bg-white flex-grow-1'>
                        <Link to="">
                            <img className="w-100" src={product.imagesSrc[3]} alt='image of product' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center my-3 mb-md-0 mt-md-4 fs-12px">
                <Link to="" className='text-decoration-none text-info'>
                    <span>
                        مشاهده 
                    </span>
                    <span>
                        {angleLeft}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ProductsOverView
