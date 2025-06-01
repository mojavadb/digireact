import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useWidth } from "../../contexts/InnerWidthContext";

function FourPartBaner({slice}) {
    const {baners} = useData();
    const {width} = useWidth();
    
    if(width > 768){
        return(
            <div className="p-4">
                <div className="d-flex mb-3 mb-xl-4 gap-3 gap-xl-4 align-items-center justify-content-between">
                    {
                    baners.slice(slice[0], slice[1]).map(banner => 
                        <div key={banner.id}>
                            <Link to="">
                                <img className="w-100 rounded-5"
                                src={banner.src} alt={banner.alt} />
                            </Link>
                        </div>
                    )
                    }
                    
                </div>
            </div>
        );
    }
    if(width <= 768){
        return(
            <div className="p-3">
                <div className="d-flex mb-3 gap-3 align-items-center justify-content-between">
                    {
                    baners.slice(slice[0], slice[0]+2).map(banner => 
                        <div key={banner.id}>
                            <Link to="">
                                <img className="w-100 rounded-5"
                                src={banner.src} alt={banner.alt} />
                            </Link>
                        </div>
                    )
                    }
                </div>
                <div className="d-flex gap-3 align-items-center justify-content-between">
                    {
                    baners.slice(slice[0]+2, slice[1]).map(banner => 
                        <div key={banner.id}>
                            <Link to="">
                                <img className="w-100 rounded-5"
                                src={banner.src} alt={banner.alt} />
                            </Link>
                        </div>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default FourPartBaner
