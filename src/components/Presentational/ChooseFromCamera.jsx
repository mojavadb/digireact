import styles from './ChooseFromCamera.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faClose } from '@fortawesome/free-solid-svg-icons';

function ChooseFromCamera({setIsOpen}) {
    const close = <FontAwesomeIcon icon={faClose} />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} color='#888' />
    
    return (
        <>
            <div className="d-flex align-items-center justify-content-between p-1">
                <span>جستجو با عکس</span>
                <button
                onClick={() => setIsOpen(false)}
                className={styles.modalClose}>{close}</button>
                </div>
                <div className='p-1'>
                <div className='p-3 pb-0 d-flex align-items-center justify-content-between'>
                    <span className="text-dark">گالری</span>
                    <span>{angleLeft}</span>
                </div>
                <hr />
                <div className='p-3 pt-0 d-flex align-items-center justify-content-between'>
                    <span className="text-dark">دوربین</span>
                    <span>{angleLeft}</span>
                </div>
            </div>
        </>
    )
}

export default ChooseFromCamera
