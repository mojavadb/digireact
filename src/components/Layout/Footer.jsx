import { Link } from "react-router-dom"
import styles from './Footer.module.css'

import DescriptionOfDigiKala from "../Presentational/DescriptionOfDigiKala"
import FooterNavigation from "../Presentational/FooterNavigation"
import LogoOfDigi from "../Presentational/LogoOfDigi"
import Accordion from "../Presentational/Accordion"
import SubBrands from "../Presentational/SubBrands"
import SendEmail from "../Presentational/SendEmail"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faHeadphones } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { useData } from "../../contexts/DataContext"
import { useWidth } from "../../contexts/InnerWidthContext"
 
const WITH_DIGIKALA = ["اتاق خبر دیجی کالا","فروش در دیجی کالا","فرصت های شغلی","گزارش تخلف در دیجی کالا","تماس با دیجی کالا","درباره دیجی کالا"];
const COSTOMER_SERVICES = ["پاسخ به پرسش های متداول","رویه های بازگرداندن کالا","شرایط استفاده","حریم خصوصی","گزارش باگ"];
const GUIDS_FOR_BUY = ["نحوه ثبت سفارش","رویه ارسال سفارش","شیوه های پرداخت"];
const COPYRIGHT = "برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.";

function Footer() {
    const {Guarantee, bedges} = useData();
    const {width} = useWidth();

    function handleBackToUp(){
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    }

    const instagram = <FontAwesomeIcon icon={faInstagram} size="2xl" />
    const telegram = <FontAwesomeIcon icon={faTelegram} size="2xl" />
    const twitter = <FontAwesomeIcon icon={faTwitter} size="2xl" />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2xl" />
    const BRANDS_OF_SOCIAL = [
        {name: instagram, id: 1},
        {name: telegram, id: 2},
        {name: twitter, id: 3},
        {name: linkedIn, id:4}
        ];
    
    const angleUp = <FontAwesomeIcon icon={faAngleUp} />
    const headPhone = <FontAwesomeIcon icon={faHeadphones} />

    if(width > 992){
        return (
            <>
                <hr />
                <footer>
                    <div className="px-4">
                        <div className="d-flex align-items-center justify-content-between flex-nowrap flex-row">
                            <LogoOfDigi />
                            <button className="btn border border-1 border-black-75 text-muted d-inline-flex align-items-center justify-content-start gap-2 fs-12px" 
                            onClick={() => handleBackToUp()}>
                                <span>بازگشت به بالا</span>
                                <span>{angleUp}</span>
                            </button>
                        </div>
                        <div className="col-12 py-3">
                            <span className="mx-2 fs-7">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                            <span className="mx-2">|</span>
                            <span className="mx-2 fs-7">۰۲۱-۹۱۰۰۰۱۰۰</span>
                            <span className="mx-2">|</span>
                            <span className="mx-2 fs-7">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-around px-5 py-4">
                        {
                        Guarantee.map(prop =>              
                            <div key={prop.id} 
                            className="d-flex flex-column gap-2 align-items-center justify-content-start gap-1">
                                <img src={prop.imageSrc} width="56px" height="56px" />
                                <span className="fs-14px color-black-type2">{prop.text}</span>
                            </div>
                            )
                        }
                    </div>
                    <div className={`${styles.cntrUL} p-4`}>
                        <div className="p-1">
                            <p className="fs-6 fw-bold">با دیجی‌کالا</p>
                            <FooterNavigation content={WITH_DIGIKALA} />

                        </div>
                        <div className="p-1">
                            <p className="fs-6 fw-bold">سرویس مشتریان</p>
                            <FooterNavigation content={COSTOMER_SERVICES} />
                        </div>
                        <div className="p-1">
                            <p className="fs-6 fw-bold">راهنما برای خرید</p>
                            <FooterNavigation content={GUIDS_FOR_BUY} />
                        </div>
                        <div className="p-1">
                            <p className="fs-6 color-black-type2 text-shadow1">همراه ما باشید!</p>
                            <div className="d-flex aling-items-center justify-content-start gap-4 py-2">
                                {
                                    BRANDS_OF_SOCIAL.map(brand =>
                                        <Link className="text-secondary" to="" key={brand.id}>
                                            {brand.name}
                                        </Link>
                                    )
                                }
                            </div>
                            <SendEmail />
                            
                        </div>
                    </div>
                    <div className={`mx-4 my-2 py-1 px-3 ${styles.bgDark} rounded-4`}>
                        <div className="d-flex align-items-center justify-content-between bg-dark2 p-3 rounded-4">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <img src="https://www.digikala.com/statics/img/png/footerlogo2.webp" width="45px" height="45px" />
                                <span className="fs-5 text-shadow2 text-white">دانلود اپلیکیشن دیجی‌کالا</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-start gap-4">
                                <Link to="" className="bg-white rounded-2">
                                    <img src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"  width="140px" height="45px" />
                                </Link>
                                <Link to="" className="bg-white rounded-2">
                                    <img src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"  width="140px" height="45px" />
                                </Link>
                                <Link to="" className="bg-white rounded-2">
                                    <img src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"  width="140px" height="45px" />
                                </Link>
                                <Link to="" className="bg-white rounded-2">
                                    <img src="https://www.digikala.com/statics/img/svg/More.svg" width="45px" height="45px" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={`mx-4 my-2 p-2 d-grid gap-4 ${styles.gridTemplateColumnTowC}`}>
                        <DescriptionOfDigiKala />
                        <div className="d-flex align-items-start justify-content-center">
                            <div className="d-flex flex-row flex-wrap gap-3 justify-content-start">
                                {bedges.map(bedge =>
                                    <Link key={bedge.id}
                                    to={bedge.to} className="p-3 border-type-one">
                                        <img src={bedge.imageSrc} alt={bedge.alt} 
                                        width="75px" height="75px" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="p-4 fs-7 text-center text-secondary">
                        {COPYRIGHT}
                    </div>
                </footer>
                <footer className="w-100 mt-3">
                    <div className={`d-grid ${styles.gridTemplateColumnSixC} ${styles.gapX1px} bg-light-typetow`}>
                        <SubBrands start={0} end={6} />
                    </div>
                    <div className={`d-grid ${styles.gridTemplateColumnEightC} ${styles.gapX1px} bg-light-typetow`}>
                        <SubBrands start={6} end={14} />
                    </div>
                </footer>
            </>
        )
    }
    if(width <= 992){
        return(
            <footer className="px-3 px-sm-4 py-2">
                <p className="d-flex align-items-center justify-content-center">
                    <Link to="" className="fs-14px text-decoration-none text-info" onClick={() => handleBackToUp()}>
                        <span className="mx-1">بازگشت به بالا</span>
                        {angleUp}
                    </Link>
                </p>
                <div className="py-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <div className={`${styles.iconForCall} d-flex align-items-center justify-content-center rounded-circle`}>
                                {headPhone}
                            </div>
                            <div>
                                <p className="mb-0 fs-14px fw-bold">تماس با پشتیبانی</p>
                                <span className="fs-12px mx-1 text-secondary">۷ روز هفته، ۲۴ ساعت</span>
                            </div>
                        </div>
                        <Link to="" className="text-decoration-none text-black bg-light-typetow px-3 py-2 fs-12px rounded-4">
                            تماس
                        </Link>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <div className={`${styles.iconForCall} d-flex align-items-center justify-content-center rounded-circle`}>
                                <img src="https://www.digikala.com/statics/img/png/Logo.webp" alt="digiKala Logo" className="w-100 rounded-circle" />
                            </div>
                            <div>
                                <p className="mb-0 fs-14px fw-bold">اپلیکیشن دیجی کالا</p>
                                <span className="fs-12px mx-1 text-secondary">تجربه خرید بهتر</span>
                            </div>
                        </div>
                        <Link to="" className="text-decoration-none text-black bg-light-typetow px-3 py-2 fs-12px rounded-4">
                            دانلود
                        </Link>
                    </div>
                </div>
                <Accordion />
                <div className="py-2">     
                    <DescriptionOfDigiKala />
                </div>
            </footer>
        );
    }
}

export default Footer