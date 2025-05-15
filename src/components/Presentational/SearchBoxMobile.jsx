import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUpload } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import ModalBottom from "../Presentational/ModalBottom"
import ChooseFromCamera from "./ChooseFromCamera"
import { useState } from "react"

const DIGIKALASRC = "https://www.digikala.com/brand/typography.svg"

function SearchBoxMobile() {
    const [isOpenChooseFromCamera, setIsOpenChooseFromCamera] = useState(false);
    const search = <FontAwesomeIcon icon={faSearch} color="#81858b" />
    const upload = <FontAwesomeIcon icon={faUpload} color="#7f53ef" />
    
    return (
        <div 
        className="
        w-100 bg-light px-3 py-2
        d-flex align-items-center justify-content-between
        rounded-3
        ">
            <Link 
            to="search"
            className="
            d-flex align-items-center justify-content-start gap-2
            text-decoration-none
            ">
                <span style={{fontSize: "16px", marginTop: "3px"}}>
                    {search}
                </span>
                <span style={{color: "#81858b", fontSize: "14px"}}>
                    <span>جستجو در</span>
                    <img 
                    src={DIGIKALASRC}
                    alt="تصویر" 
                    style={{width: "60px", marginRight: "3px"}}
                    />
                </span>
            </Link>
            <ModalBottom 
            isOpen={isOpenChooseFromCamera} 
            setIsOpen={setIsOpenChooseFromCamera} 
            content={<ChooseFromCamera setIsOpen={setIsOpenChooseFromCamera} />}
            >
                {upload}
            </ModalBottom>
            
        </div>
    )
}

export default SearchBoxMobile
