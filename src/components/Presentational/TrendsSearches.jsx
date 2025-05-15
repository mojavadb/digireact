import { faAngleLeft, faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const trends = [
    "ربع سکه", "صندل زنانه", "پنکه شارژی", "موتور برق", "گوشی آیفون 16"
];

function TrendsSearches() {
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} color="#3f4064" />
    const fire = <FontAwesomeIcon icon={faFire} color="#3f4064" />
    return (
        <div>
            <div>
                <h6 className="d-flex align-items-center justify-content-start gap-3">
                    <span className="mt-1">{fire}</span>
                    <span style={{fontSize: "14px", color: "#3f4064", fontWeight: "600"}}>جستجوهای پرطرفدار</span>
                </h6>
                {trends.map(trend =>(
                    <button key={trend}
                    className="btn border border-1 mx-2 my-1 rounded-5 "
                    style={{fontSize: "14px", color: "#3f4064"}}>
                        <span> {trend} </span>
                        <span> {angleLeft} </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TrendsSearches
