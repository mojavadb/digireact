import { useRef } from 'react';
import styles from './Stories.module.css'

import Story from '../Presentational/Story';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useData } from '../../contexts/dataContext';

function Stories() {
    const {stories} = useData();

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
        <section className="p-2 position-relative">
        <button 
        className="right-15 top-p40 prevBtn border"
        onClick={()=>handleScrollRight()}>
          {angleRight}
        </button>
        <div className={`${styles.scrollbarHidden} d-flex gap-1 gap-md-2 gap-lg-3 overflow-auto`}
        ref={sizeOfScroll}>
            {
            stories.map(story => (
                <Story story={story} key={story.id} />
            ))
            }
        </div>
        <button 
        className="left-15 top-p40 prevBtn border"
        onClick={()=>handleScrollLeft()}>
          {angleLeft}
        </button>
        </section>
    )
    
}

export default Stories
