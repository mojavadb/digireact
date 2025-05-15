import { Link } from "react-router-dom";
import { useWidth } from "../../contexts/InnerWidthContext";

const SHOEWS_TYPES = "https://dkstatics-public.digikala.com/digikala-adservice-banners/5182fd97b98ada0dedbf2b7be55114bce5c6b94d_1746456459.jpg?x-oss-process=image/quality,q_95/format,webp";
const HELTHY_SKIN = "https://dkstatics-public.digikala.com/digikala-adservice-banners/e8009dce10339f2dd3ad1ac8f3a6cb064963da6a_1746360310.jpg?x-oss-process=image/quality,q_95/format,webp";
function TowPartBaner() {
    const {width} = useWidth();
    return (
        <div className="p-3 p-lg-4">
            <div className={`d-flex gap-3 gap-sm-4
                ${width > 768 ? "flex-row" : "flex-column"}`}>
                <Link to="">
                    <img src={SHOEWS_TYPES} className="w-100 rounded-4" alt="انواع کفش شیما" />
                </Link>
                <Link to="">
                    <img src={HELTHY_SKIN} className="w-100 rounded-4" alt="پوست و مویی سالم" />
                </Link>
            </div>
        </div>
    )
}


export default TowPartBaner
