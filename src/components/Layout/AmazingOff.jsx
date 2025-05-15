import { useRef } from "react"
import styles from './AmazingOff.module.css'

import AmazingProduct from "../Presentational/AmazingProduct"
import AmazingTimerBanner from "../Presentational/AmazingTimerBanner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import { useData } from "../../contexts/dataContext"
import { useWidth } from "../../contexts/InnerWidthContext"


function AmazingOff() {
    const {amazing} = useData();
    const {width} = useWidth();

    const angleRight = <FontAwesomeIcon icon={faAngleRight} />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />

    const sizeOfScroll = useRef(null);
    function handleScrollLeft(){
        sizeOfScroll.current.scrollBy({left: -140, behavior: "smooth"});
    }
    function handleScrollRight(){
        sizeOfScroll.current.scrollBy({left: 140, behavior: "smooth"});
    }

    return (
        <div className="bg-danger py-2 position-relative">
            <button 
            className={`${styles.prevBtn} prevBtn border`} 
            onClick={()=>handleScrollRight()}>
              {angleRight}
            </button>
            {width <= 768 &&
                <AmazingTimerBanner width={width} />
            }
            <div ref={sizeOfScroll} className={`d-flex px-3 py-md-2 overflow-auto ${styles.scrollbarHidden}`}>
                {width > 768 &&
                    <AmazingTimerBanner width={width} />
                }
                {
                    amazing.map(eachProduct =>
                        <AmazingProduct width={width} eachProduct={eachProduct} key={eachProduct.id} />
                    )
                }
                {
                    <AmazingProduct width={width} />
                }
            </div>
            <button 
            className={`${styles.nextBtn} nextBtn border`} 
            onClick={()=>handleScrollLeft()}>
              {angleLeft}
            </button>
        </div>
    )
}

export default AmazingOff
