import { useRef } from "react";
import ShowEachBestSelly from "../Presentational/ShowEachBestSelly"
import styles from './DisplayBest.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useWidth } from "../../contexts/InnerWidthContext";
function DisplayBest({slice, title}) {
    const {width} = useWidth();
    const {bestSelling} = useData();
    
    const sizeOfScroll = useRef(null);
    function handleScrollLeft(){
        sizeOfScroll.current.scrollBy({left: -140, behavior: "smooth"});
    }
    function handleScrollRight(){
        sizeOfScroll.current.scrollBy({left: 140, behavior: "smooth"});
    }

    const fire = <FontAwesomeIcon icon={faFire} color="#f9a825" />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const angleRight = <FontAwesomeIcon icon={faAngleRight} />

    
    return ( 
        <section className={`position-relative ${width > 768 ? "border-type-one" : ""} py-3 py-lg-4 mx-2 mx-md-4`}>
            <h6 className="fs-4 mx-2 mx-md-4">
                <Link to="" className="text-decoration-none">
                <div className="d-flex gap-2 text-dark">
                    <span>
                        {fire}
                    </span>
                    <span>
                        {title}
                    </span>
                </div>
                </Link>
            </h6>
            <button 
            className={`${styles.prevBtn} prevBtn border`} 
            onClick={()=>handleScrollRight()}>
            {angleRight}
            </button>
            <div ref={sizeOfScroll} className={`d-flex flex-row my-3 my-md-4 gap-3 overflow-auto ${styles.scrollbarHidden}`}>
                {
                bestSelling.slice(slice[0], slice[1]).map(columnData =>
                    <div key={columnData.id}
                    className="d-flex flex-column gap-1 gap-md-3">
                    <ShowEachBestSelly
                    imageSrc={columnData.imageSrc[0]} 
                    number={columnData.numbers[0]}
                    text={columnData.texts[0]}
                    isBordered={true} 
                    />
                    <ShowEachBestSelly
                    imageSrc={columnData.imageSrc[1]} 
                    number={columnData.numbers[1]}
                    text={columnData.texts[1]}
                    isBordered={true} 
                    />
                    <ShowEachBestSelly
                    imageSrc={columnData.imageSrc[2]} 
                    number={columnData.numbers[2]}
                    text={columnData.texts[2]}
                    isBordered={false} 
                    />
                    </div>
                )
                }
            </div>
            <button 
            className={`${styles.nextBtn} nextBtn border`} 
            onClick={()=>handleScrollLeft()}>
            {angleLeft}
            </button>
        </section>
        )
}

export default DisplayBest