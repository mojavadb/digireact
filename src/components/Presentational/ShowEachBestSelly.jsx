import { Link } from 'react-router-dom'
import styles from './ShowEachBestSelly.module.css'

function ShowEachBestSelly({isBordered, imageSrc, number, text}) {
    return (
        <div className='p-1'>
            <Link className="d-flex flex-row align-items-center gap-2 justify-content-start text-decoration-none"
            style={{width: "280px"}}>
                <div>
                    <img
                    src={imageSrc}
                    alt={text}
                    width="86px"
                    height="86px" 
                    />
                </div>
                <div>
                    <span className={`fs-4 ms-3 fw-bold ${styles.cBlue}`}>
                        {number}
                    </span>
                </div>
                <div className={`${isBordered === true ? "after" : ""} ${styles.textLineMaxTow} py-4`}>
                    <span className={`fs-14px ${styles.cBlack}`}>
                        {text}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ShowEachBestSelly
