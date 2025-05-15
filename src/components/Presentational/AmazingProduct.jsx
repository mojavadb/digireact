import { Link } from 'react-router-dom'
import styles from './AmazingProduct.module.css'

function AmazingProduct({eachProduct = null, width}) {
    if(eachProduct === null){
        return(
            <div className={`${styles.seeAll} flex-shrink-0 bg-white ms-1 my-1 d-flex align-items-center justify-content-center`}>
                <Link to="" className='text-decoration-none'>
                    مشاهده همه  
                </Link>
            </div>
        )
    }else{
        return (
            <div className={`${styles.cntrCard} flex-shrink-0 my-1 p-2 bg-white ms-1
            ${((eachProduct.isOne === true) && (width < 768))? styles.rounded0330: null}`}>
                <Link to="" className='text-decoration-none'>
                    <div className='position-relative mb-2'>
                        <img className='w-100'
                        src={eachProduct.src} alt={eachProduct.caption} />
                        <span className={`${styles.off} bg-danger rounded-4 text-white`}>
                            {eachProduct.off}
                        </span>
                    </div>
                    <div>
                        <div className={`${styles.caption} mb-2`}>
                            {eachProduct.caption}
                        </div>
                        <div>
                            <div className={styles.newPrice}>
                                {eachProduct.newPrice}
                                <span>تومان</span>
                            </div>
                            <div className={styles.prePrice}>
                                <del>{eachProduct.prePrice}</del>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default AmazingProduct
