import { useState } from "react";
import { useData } from "../../contexts/dataContext";
import styles from './Accordion.module.css';
import FooterNavigation from "./FooterNavigation";
import FooterNavTitle from "./FooterNavTitle";
import SubBrands from "./SubBrands";
const WITH_DIGIKALA = ["اتاق خبر دیجی کالا","فروش در دیجی کالا","فرصت های شغلی","گزارش تخلف در دیجی کالا","تماس با دیجی کالا","درباره دیجی کالا"];
const COSTOMER_SERVICES = ["پاسخ به پرسش های متداول","رویه های بازگرداندن کالا","شرایط استفاده","حریم خصوصی","گزارش باگ"];
const GUIDS_FOR_BUY = ["نحوه ثبت سفارش","رویه ارسال سفارش","شیوه های پرداخت"];


function Accordion() {
    const {BtmImageSrc} = useData();

    const [collapsingState, setCollapsingState] = useState(null);

    function handleCollapsingState(num){
        setCollapsingState(num === collapsingState ? null : num);
    }

    return (
        <div className="d-flex flex-column py-2">
            <div className="border-type-tow py-3 px-2">
                <FooterNavTitle title="با دیجی کالا" sitution={0} state={collapsingState} handleState={handleCollapsingState} />
                <FooterNavigation state={collapsingState} sitution={0} content={WITH_DIGIKALA} />
            </div>
            <div className="border-type-tow py-3 px-2">
                <FooterNavTitle title="خدمات مشتریان" sitution={1} state={collapsingState} handleState={handleCollapsingState} />
                <FooterNavigation state={collapsingState} sitution={1} content={COSTOMER_SERVICES} />
            </div>
            <div className="border-type-tow py-3 px-2">
                <FooterNavTitle title="راهنمای خرید از دیجی کالا" sitution={2} state={collapsingState} handleState={handleCollapsingState} />
                <FooterNavigation state={collapsingState} sitution={2} content={GUIDS_FOR_BUY} />
            </div>
            <div className="border-type-tow py-3 px-2">
                <FooterNavTitle title="شرکای تجاری" sitution={3} state={collapsingState} handleState={handleCollapsingState} />
                <div>
                    {collapsingState === 3 && 
                    <div className={`px-1 ${collapsingState === 3 ? "pt-3" : ""}`}>
                        <div className={`d-grid ${styles.gridTemplateColumnThreeC} ${styles.gapX1px} bg-light-typetow`}>
                            <SubBrands start={0} end={3} />
                            <SubBrands start={3} end={6} />
                            <SubBrands start={6} end={9} />
                            <SubBrands start={9} end={12} />
                        </div>
                        <div className={`d-grid ${styles.gridTemplateColumnTowC} ${styles.gapX1px} bg-light-typetow`}>
                            <SubBrands start={12} end={14} />
                        </div>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Accordion
