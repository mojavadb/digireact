import { Link } from "react-router-dom";

const BUYFROMSUPERMARKET = "https://dkstatics-public.digikala.com/digikala-admin-landing/d4d0e63e84d713ef0b19e00edcb42d4ac5c259ec_1725786112.png";
function BuyFromSuperMarket() {
    return (
        
        <div className="py-3 px-2 d-md-none">
            <Link to="">
                <img 
                src={BUYFROMSUPERMARKET}
                alt="خرید سوپرمارکتی"
                className="w-100 d-inline-block rounded-4 cursor-pointer"
                />
            </Link>
        </div>
    )
}

export default BuyFromSuperMarket
