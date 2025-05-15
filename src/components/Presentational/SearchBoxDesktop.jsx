import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Outlet } from "react-router-dom"

function SearchBoxDesktop() {
    const search = <FontAwesomeIcon icon={faSearch} color="#81858b" />
    
    return (
        <div 
        className="w-65 bg-light px-4 py-2 rounded-3 d-flex
        align-items-center justify-content-between position-relative">
            <Link
            to="searchD"
            className="
            d-flex align-items-center justify-content-start gap-3
            text-decoration-none">
                <span style={{fontSize: "16px", marginTop: "3px"}}>
                    {search}
                </span>
                <span style={{color: "#81858b", fontSize: "14px"}}>
                    جستجو
                </span>
            </Link>
            <Outlet />
        </div>
    )
}

export default SearchBoxDesktop
