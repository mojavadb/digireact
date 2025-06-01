import { useData } from "../../contexts/DataContext.jsx";
import Benefit from "../Presentational/Benefit.jsx";
import styles from './Benefits.module.css'



function Benefits() {
    const {benefits} = useData();

    const totalWidth = `${84 * benefits.length}px`;

    return (
        <div className={`p-2 p-md-3 p-lg-4 overflow-auto ${styles.scrollbarHidden}`}>
        <div className={`d-flex ${styles.containerBenefits}`}
        style={{minWidth: `${totalWidth}`}}>
            {benefits.map(benefit =>
            <Benefit benefit={benefit} key={benefit.id} />
            )}

        </div>
        </div>
    )
    
}

export default Benefits