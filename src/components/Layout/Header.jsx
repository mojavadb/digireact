import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBoxMobile from "../Presentational/SearchBoxMobile"
import ModalBottom from "../Presentational/ModalBottom"
import ChooseCity from "../Presentational/ChooseCity"
import LogoOfDigi from "../Presentational/LogoOfDigi"
import SearchBoxDesktop from "../Presentational/SearchBoxDesktop"
import CategoryProductsNav from "../Presentational/CategoryProductsNav"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faAngleLeft, faCartShopping, faFire, faICursor, faLocationDot, faMobile, faRing, faShoppingBasket, faSignIn } from "@fortawesome/free-solid-svg-icons"

import { useWidth } from "../../contexts/InnerWidthContext"

const NAV_DATA_TEXT = [
    {
        num: 0,
        name: "شگفت انگیز ها"
    },
    {
        num: 1,
        name: "سوپرمارکت"
    },
    {
        num: 2,
        name: "طلای دیجیتال"
    },
    {
        num: 3,
        name: "پرفروش ترین ها"
    },
    {
        num: 4,
        name: "خرید کالای کارکرده"
    },
    {
        num: 6,
        name: "سوالی دارید؟"
    },
    {
        num: 7,
        name: "در دیجی کالا بفروشید!"
    }
]

function Header() {
    const [isOpenChooseCity, setIsOpenChooseCity] = useState(false);
    const [isOpenTextForChooseCity, setIsOpenTextForChooseCity] = useState(false);
    
    const {width} = useWidth();

    const bell = <FontAwesomeIcon icon={faBell} />
    const location = <FontAwesomeIcon icon={faLocationDot} color="#444" />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} color="#444" />
    const signIn = <FontAwesomeIcon icon={faSignIn} />
    const cardShopping = <FontAwesomeIcon icon={faCartShopping} />

    const cursor = <FontAwesomeIcon icon={faICursor} />;
    const shoping = <FontAwesomeIcon icon={faShoppingBasket} />;
    const ring = <FontAwesomeIcon icon={faRing} />;
    const fire = <FontAwesomeIcon icon={faFire} />;
    const mobile = <FontAwesomeIcon icon={faMobile} />
    const NAV_DATA_ICON = [cursor, shoping, ring, fire, mobile];

    const locationDot = <FontAwesomeIcon icon={faLocationDot} />

    if(width < 992){
        return (
        <header className="px-3 py-2 z-3 sticky-top bg-white border-type-five">
            <div className="d-flex align-items-center justify-content-between gap-2">
                <SearchBoxMobile />
                <Link to="login" className="btn btn-light rounded-circle">
                    {bell}
                </Link>
            </div>
            <div>
                <ModalBottom
                    isOpen={isOpenChooseCity}
                    setIsOpen={setIsOpenChooseCity}
                    content={<ChooseCity setIsOpen={setIsOpenChooseCity} />}
                >
                    <div className="d-flex gap-2 mt-2 p-1" 
                    style={{color: "var(--bs-dark-text-emphasis)", fontSize: "14px"}}>
                        <span className="fs-6">{location}</span>
                        <span>انتخاب استان و شهر</span>
                        <span className="fs-6">{angleLeft}</span>
                    </div>
                </ModalBottom>
            </div>
        </header>
    )
    }
    if(width >= 992){
        return (
        <header style={{
            borderBottom: "1px solid #eee",
            top: width>768? "60px": "0px"
        }}
            className="z-3 sticky-top bg-white d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="d-flex p-2 align-items-center justify-content-start gap-3 flex-grow-1">
                    <LogoOfDigi />
                    <SearchBoxDesktop />
                </div>
                <div className="d-flex align-items-center justify-content-start gap-1">
                    <Link
                    to="login"
                    className="btn rounded-circle"
                    >
                        {bell}
                    </Link>
                    <Link to="" className="btn d-inline-flex gap-2 border border-black-50 fs-14px">
                        <span className="mt-1">
                            {signIn}
                        </span>
                        <span>
                            ورود | ثبت نام
                        </span>
                    </Link>
                    <Link
                    to=""
                    className="btn rounded-circle"
                    >
                        {cardShopping}
                    </Link>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between px-2">
                <div className="d-flex align-items-center">
                    <CategoryProductsNav />
                    <nav className="px-3 borderAfterBefore">
                        <ul className="p-0 m-0 list-inline d-flex gap-3 justify-content-start">
                            {
                                NAV_DATA_TEXT.slice(0,5).map(text =>
                                    <li key={text.num} className={`border-type-four py-3 list-inline-item m-0 ${width > 1100 ? "fs-14px" : "fs-12px"}`}>
                                        <Link to="" className="text-decoration-none d-flex gap-1 text-dark p-0 m-0">
                                            <span>
                                                {NAV_DATA_ICON[text.num]}
                                            </span>
                                            <span>
                                                {text.name}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                    <nav className="px-2">
                        <ul className="p-0 m-0 list-inline d-flex gap-3 justify-content-start">
                                {NAV_DATA_TEXT.slice(5, 7).map(text =>
                                    <li key={text.num} className={`border-type-four py-3 list-inline-item m-0 ${width > 1100 ? "fs-14px" : "fs-12px"}`}>
                                        <Link to="" className="text-decoration-none d-flex gap-1 text-dark p-0 m-0">
                                            <span>
                                                {text.name}
                                            </span>
                                        </Link>
                                    </li>
                                )}
                        </ul>
                    </nav>
                </div>
                <div className="position-relative"
                onMouseOver={() => setIsOpenTextForChooseCity(true)}
                onMouseLeave={() => setIsOpenTextForChooseCity(false)}
                >
                    <ModalBottom
                    isOpen={isOpenChooseCity}
                    setIsOpen={setIsOpenChooseCity}
                    content={<ChooseCity setIsOpen={setIsOpenChooseCity} />}
                    >
                        <div className="d-inline-flex align-items-center gap-2 rounded-5 py-2 px-3 bg-light text-decoration-none text-primary cursor-pointer">
                        {locationDot}
                        <span className={`fw-bold ${width > 1100 ? "fs-14px" : "fs-12px"}`}>شهر خود را انتخاب کنید</span>
                        </div>
                    </ModalBottom>
                    {isOpenTextForChooseCity && 
                    <div className="position-absolute top-p50 left-5">
                        <div className="bg-light shadow-lg fs-12px p-2 rounded-2">
                            برای انتخاب شهر یا استان خود کلیک کنید
                        </div>
                    </div>
                    }
                </div>
                
            </div>
        </header>
    )
    }
}

export default Header
