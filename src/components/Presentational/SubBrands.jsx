import { useData } from "../../contexts/DataContext"
import { useWidth } from "../../contexts/InnerWidthContext";

function SubBrands({start, end}) {
    const {BtmImageSrc} = useData();
    const {width} = useWidth();

    return (
        <>
            { 
            BtmImageSrc.slice(start, end).map(src =>
                    <div className={`${width > 992 ? "py-3 px-5 bg-light mBtm1px" : "mBtm1px py-4 px-2 px-sm-5 bg-white"}`} key={src.id}>
                        <img src={src.imageSrc} className="w-100 h-100" alt="subBrands of DIGIKALA" />
                    </div>
                )
            }
        </>
    )
}

export default SubBrands
