import { Link } from 'react-router-dom'
import styles from './Story.module.css'

function Story({story}) {
    return (
        <div className='d-inline-block'>
            <Link to="" className='text-decoration-none'>
                <div className={styles.contanerStories}>
                    <div className={styles.contanerImage}>
                        <img className='w-100 object-fit-cover rounded-circle'
                        src={story.src} alt={story.caption}
                        style={{height: "74px"}} />
                    </div>
                    <p className={styles.text}>
                        {story.caption}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Story
