import styles from './ChooseCity.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { useData } from '../../contexts/DataContext';

const TREND_CITIES = [
    "تهران", "کرج", "اصفهان", "مشهد", "ساری", "رشت", "اهواز", "تبریز", "قم"
];

function ChooseCity({setIsOpen}) {
    const {cities} = useData();
    const [searchCity, setSearchCity] = useState("");
    
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const close = <FontAwesomeIcon icon={faClose} />

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchCity.toLowerCase())
    );
    
    return (
        <div className={styles.allContent}>
            <div className="d-flex align-items-center justify-content-between p-1">
                <span>انتخاب شهر</span>
                <button
                onClick={() => setIsOpen(false)}
                className={styles.modalClose}>{close}</button>
            </div>
            <hr />
            <div className="p-1 bg-white">
                <input
                className={`${styles.searcher} bg-light w-100 mb-2 p-3 rounded-3`}
                type="text"
                placeholder='جستجو در استان ها و شهر های ایران'
                value={searchCity}
                onChange={(e)=>{setSearchCity(e.target.value)}}
                />
                <div className={styles.cities}>
                    <p className={`p-2 mb-0 ${styles.text}`}>
                        برای مشاهده تخفیف ها و کالاهای قابل ارسال به شهرتان، آن را انتخاب کنید
                    </p>
                    <p className={`p-2 mb-0 text-dark fw-bold`}>
                        شهر های پرتکرار
                    </p>
                    <div className={styles.cntrTrends}>
                        {TREND_CITIES.map(trend =>(
                            <button key={trend}
                            className="btn border border-1 mx-2 my-1 rounded-5 "
                            style={{fontSize: "14px", color: "#3f4064"}}>
                                <span> {trend} </span>
                                <span> {angleLeft} </span>
                            </button>
                        ))}
                    </div>
                    <div>
                        {filteredCities.map(city =>(
                        <div key={city.id}
                        className='d-flex align-items-center p-3 justify-content-between'>
                            <span className="fw-bold">{city.name}</span>
                            <span className="fw-bold">{angleLeft}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCity