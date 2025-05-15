import { Link } from "react-router-dom";
import { useWidth } from "../../contexts/InnerWidthContext";

const TOPBANER = "https://dkstatics-public.digikala.com/digikala-adservice-banners/56567771c5de88f7df5970af62dadcdbf6498140_1746876663.jpg?x-oss-process=image/quality,q_95/format,webp";

function TopBaner() {
    const {width} = useWidth();

    return (
        <div className={`z-10 ${width > 768 ? "sticky-top top-0" : ""}`}>
            <Link to="">
                <img 
                src={TOPBANER} 
                alt='خرید سر ماه' 
                className="w-100 d-inline-block" 
                style={{objectFit: "cover"}} 
                height={(width > 768)? "60px" : "35px"}
                />
            </Link>
        </div>
    )
}

export default TopBaner
