import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const inputStyle = {
    border : "none",
    outline: "none",
};
const flexCenter = {
    display: "flex",
    alignItems: "center",
    justifyContnet: "center"
}

function SearchInput({className, query, setQuery}) {
        
    const navigate = useNavigate();
    
    const close = <FontAwesomeIcon icon={faClose} color="#71757b" />
    const angleRight = <FontAwesomeIcon icon={faArrowRight} color="#71757b" />
        
    return (
        <form action="">
            <div className={`px-2 py-1 ${className} d-flex align-items-center rounded-3`}>
                <div 
                style={flexCenter}
                className="p-2"
                onClick={()=>{navigate(-1)}}
                >
                    {angleRight}
                </div>
                <div className="w-100">
                    <input
                    type="text"
                    className={`${className} w-100`}
                    style={inputStyle}
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                </div>
                <div 
                style={flexCenter} 
                className="p-2"
                onClick={()=>setQuery("")}>
                {close}
                </div>
                </div>
            </form>
    )
}

export default SearchInput
