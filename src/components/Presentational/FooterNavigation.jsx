import { Link } from "react-router-dom"

function FooterNavigation({state= "", sitution= "", content}) {

    return (
        <div>
            {state === sitution && 
            <ul className={`list-unstyled px-1 ${state !== "" ? "pt-3" : ""}`}>
                {content.map(text =>
                    <li className="py-2" key={text}>
                        <Link to="" className="text-decoration-none link-secondary fs-14px">{text}</Link>
                    </li>
                )}
            </ul>
            }
        </div>
    )
}

export default FooterNavigation
