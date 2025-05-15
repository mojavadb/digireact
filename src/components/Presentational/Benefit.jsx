import { Link } from 'react-router-dom'
import styles from './Benefit.module.css'

function Benefit({benefit}) {
    return (
        <div className={styles.benefit}>
            <Link to="" className='text-decoration-none'>
                <div className='px-3'>
                    <img className={styles.image} src={benefit.src} alt='benefit' />
                </div>
                <div className={styles.text}>
                    {benefit.caption}
                </div>
            </Link>
        </div> 
    )
}

export default Benefit
