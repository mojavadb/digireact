import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AmazingSuperMarket.module.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useData } from '../../contexts/DataContext';
import { useWidth } from '../../contexts/InnerWidthContext';

const BASKETIMAGE = "https://www.digikala.com/statics/img/png/amazing/fresh.webp";
const AMAZINGSUPERMARKET = "https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg";

function AmazingSuperMarket() {
    const {amazingSuperMarket} = useData();
    const {width} = useWidth();

    // DRIVED STATE FOR CALCULATE HOW MUCH SHOWING PRODUCT
    const count = Math.floor((1 / 150) * width + (1.25));

    const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} color='#029a49' />
    if (width < 992) {
        return (
            <section className={`m-2 p-3 rounded-4 ${styles.backGround}`}>
                <div className="d-block">
                    <div className="d-flex align-items-center justify-content-start gap-2 gap-sm-3 mb-2">
                        <Link to="">
                            <img src={BASKETIMAGE} alt='آیکون سبد خرید'
                            width="40px" height="40px" />
                        </Link>
                        <Link to="">
                            <img src={AMAZINGSUPERMARKET} alt='شگفت انگیز سوپر مارکتی'
                            width="200px" height="45px" />
                        </Link>
                    </div>
                    <div className='mb-3'>
                        <span className='bg-success rounded-5 px-2 mx-4 text-white'>
                            تا ۴۹٪ تخفیف
                        </span>
                    </div>
                    <div className='d-flex flex-row flex-nowrap align-items-center justify-content-between'>
                        <div className='d-flex flex-row flex-nowrap align-items-center justify-content-start gap-2 gap-sm-3'>
                            {
                                getRandomElements(amazingSuperMarket, count).map(amazing =>
                                    <div key={amazing.id} className="p-2 d-flex bg-white rounded-circle position-relative cursor-pointer">
                                        <Link to="">
                                            <span className="position-absolute fs-12px px-1 bottom-0 start-0 text-white bg-danger rounded-5">{amazing.off}</span>
                                            <img className="rounded-circle" src={amazing.src} width="50px" height="50px" />
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <Link to="">
                            <div className='d-flex bg-white rounded-circle align-items-center justify-content-center p-3'>
                                    {arrowLeft}
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
    if (width >= 992) {
        return (
            <div className={`mx-2 mx-md-3 mx-lg-4 p-3 p-lg-4 rounded-4 ${styles.backGround}`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="d-flex align-items-center justify-content-start gap-0 gap-lg-2">
                        <Link to="">
                            <img src={BASKETIMAGE} alt='آیکون سبد خرید'
                            width="55px" height="55px" />
                        </Link>
                        <Link to="">
                            <img src={AMAZINGSUPERMARKET} alt='شگفت انگیز سوپر مارکتی'
                            width="220px" height="55px" />
                        </Link>
                        <span className='bg-success rounded-5 px-2 mx-2 text-white'>
                            تا ۴۹٪ تخفیف
                        </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-start gap-3 gap-lg-4'>
                        <div className='d-flex flex-row flex-nowrap align-items-center justify-content-start gap-2 gap-lg-3'>
                            {
                                getRandomElements(amazingSuperMarket, 5).map(amazing =>
                                    <div key={amazing.id} className="p-2 d-flex bg-white rounded-circle position-relative cursor-pointer">
                                        <Link to="">
                                        <span className="position-absolute fs-12px px-1 bottom-0 start-0 text-white bg-danger rounded-5">{amazing.off}</span>
                                        <img className="rounded-circle" src={amazing.src} width="50px" height="50px" />
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <Link to="">
                            <div className='cursor-pointer d-flex bg-white rounded-circle align-items-center justify-content-center p-3'>
                                {arrowLeft}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function getRandomElements(array, count) {
    let shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export default AmazingSuperMarket
