import { useRef } from 'react'
import styles from './CelebratedBrands.module.css'
import CelebratedBrand from '../Presentational/CelebratedBrand'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useData } from '../../contexts/DataContext';
import { useWidth } from '../../contexts/InnerWidthContext';

function CelebratedBrands() {
    const {width} = useWidth();
    const {celebratedBrands} = useData();

    const star = <FontAwesomeIcon icon={faStar} color='#f0bc00' />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const angleRight = <FontAwesomeIcon icon={faAngleRight} />
     
    const sizeOfScroll = useRef(0);
    function handleScrollLeft(){
        sizeOfScroll.current.scrollBy({left: -96, behavior: "smooth"});
    }
    function handleScrollRight(){
        sizeOfScroll.current.scrollBy({left: 96, behavior: "smooth"});
    }

    return (
        <section className={`position-relative p-3 p-lg-4 ${width > 768 ? "mx-4 border-type-one" : ""} `}>
            <button 
            className="right-15 top-50 prevBtn border" 
            onClick={()=>handleScrollRight()}>
            {angleRight}
            </button>
            <p className={`d-flex align-items-center justify-content-center gap-2 gap-md-3 fw-bold ${width > 768 ? "fs-4" : ""}`}>
                <span>{star}</span>
                <span>محبوب ترین برند ها</span>
            </p>
            <div ref={sizeOfScroll} className={`overflow-auto d-flex ${styles.scrollbarHidden}`}>
                {
                celebratedBrands.map(brand =>(
                    <CelebratedBrand 
                    key={brand.id} 
                    width={width} 
                    className={styles.borderLeft}
                    brand={brand}
                    />
                ))
                }
            </div>
            <button 
            className="top-50 left-15 nextBtn border" 
            onClick={()=>handleScrollLeft()}>
              {angleLeft}
            </button>
        </section>
        )
}

export default CelebratedBrands


/**
     
*/