import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useWidth } from "../../contexts/InnerWidthContext";
import { useData } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import styles from './CategoryProductsNav.module.css'

function CategoryProductsNav() {
    const {width} = useWidth();
    const {ShopBasedOnCategory} = useData();

    const [isOpenCategoryPro, setIsOpenCategoryPro] = useState(false);
    
    const menuBar = <FontAwesomeIcon icon={faBars} />
    
    return (
        <div className="position-relative"
        onMouseOver={() => setIsOpenCategoryPro(true)}
        onMouseLeave={() => setIsOpenCategoryPro(false)}>
            <button className="button-default p-2 d-flex gap-1 align-items-center justify-content-start">
                <span className="mt-1">
                    {menuBar}
                </span>
                <span className={`${width>1100 ? "fs-14px": "fs-12px"}`}>
                    دسته بندی کالا
                </span>
            </button>
            <div className="position-absolute">
                {isOpenCategoryPro && 
                <div className="position-absolute top-100 right-15">
                    <ul className="list-unstyled max-height-500px rounded-2 shadow-sm overflow-auto p-0 bg-light fs-14px w-180px">
                        {ShopBasedOnCategory.map(category=>
                            <li className={`px-3 ${styles.item}`}>
                                <Link to="" className={`d-block py-3 text-decoration-none ${styles.item}`}>
                                    {category.caption}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}

export default CategoryProductsNav
