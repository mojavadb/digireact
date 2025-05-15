import { Link } from 'react-router-dom'
import styles from './Category.module.css'
(styles)
function Category({ category }) {
    return (
        <div className='d-inline-flex cursor-pointer flex-column align-items-center px-3 px-md-5'>
            <Link to="" className='text-decoration-none'>
                <img className={styles.image}
                    src={category.src} alt={category.caption} />
                <div className={`text-center ${styles.caption}`}>
                    <span className={`fs-12px fw-bold text-dark`}>
                        {category.caption}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Category
