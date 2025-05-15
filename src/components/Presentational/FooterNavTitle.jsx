import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function FooterNavTitle({state= "", handleState ="", title, sitution= ""}) {

    const angleDown = <FontAwesomeIcon icon={faAngleDown} />
    const angleUp = <FontAwesomeIcon icon={faAngleUp} />

    return (
        <div className="fs-6 fw-bold d-flex justify-content-between" onClick={() => handleState(sitution)}>
            <span>
                {title}
            </span>
            <span>
                {state === sitution ?
                angleUp :
                angleDown
                }
            </span>
        </div>
    )
}

export default FooterNavTitle
