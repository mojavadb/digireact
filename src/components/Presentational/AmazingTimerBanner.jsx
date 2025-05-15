import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AmazingTimerBanner.module.css'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import useTimer from '../../hooks/useTimer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EXPONEDTIME = 8 * 3600; // 8 hours


function AmazingTimerBanner({width}) {
    const [time, setTime] = useState(EXPONEDTIME);  
      
    
    /* DRIVED STATES FROM TIME */
    const hour = (Math.floor(time / 3600) < 10) ? "0" + Math.floor(time / 3600) : Math.floor(time / 3600);
    const min = (Math.floor((time - hour * 3600) / 60) < 10) ? "0" + Math.floor((time - hour * 3600) / 60) : Math.floor((time - hour * 3600) / 60);
    const sec = ((time - hour * 3600 - min * 60) < 10) ? "0" + (time - hour * 3600 - min * 60) : (time - hour * 3600 - min * 60);
    
    useTimer(setTime);

    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} fontSize={"sm"} />

    if(width < 768){
        return(
            <div className="p-2 px-lg-5 d-flex align-items-center justify-content-between">
                <div className="d-flex gap-2">
                    <div>
                        <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg" alt="precent"
                            style={{ width: "28px", height: "28px" }} className="mx-1" />
                        <img src="https://www.digikala.com/statics/img/svg/typography/incredible-word.svg" alt="precent"
                            style={{ width: "calc(100px + 2vw)", height: "calc(20px + 1.5vh)" }} />
                    </div>
                    <div>
                        <p className={styles.timerNumber}>{sec}</p>
                        :
                        <p className={styles.timerNumber}>{min}</p>
                        :
                        <p className={styles.timerNumber}>{hour}</p>
                    </div>
                </div>
                <div className={styles.seeAll}>
                    <Link to="" className="text-decoration-none text-white">
                        <span>{width > 768 ? "مشاهده همه" : "همه"}</span>
                        <span>{angleLeft}</span>
                    </Link>
                </div>
            </div>
        )
    }
    if(width >= 768){
        return(
            <div className={`${styles.seeAll} flex-shrink-0 py-3 px-4 d-flex align-items-center justify-content-center`}>
                    <div className='d-flex flex-column align-items-center gap-2'>
                        <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" alt="پیشنهاد شگفت انگیز"
                        width={"100px"} height="100px" />
                        <div>
                            <p className={styles.timerNumber}>{sec}</p>
                            <span className="text-white mx-1">:</span>
                            <p className={styles.timerNumber}>{min}</p>
                            <span className="text-white mx-1">:</span>
                            <p className={styles.timerNumber}>{hour}</p>
                        </div>
                        <img src='https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg' alt='تخفیف به درصد' />
                        <Link to="" className='text-white text-decoration-none'>
                            مشاهده همه
                        </Link>
                    </div>
            </div>
        );
    }
}

export default AmazingTimerBanner
