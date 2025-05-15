import Header from "../components/Layout/Header"
import Stories from "../components/Layout/Stories"
import Slider from "../components/Layout/Slider"
import Benefits from "../components/Layout/Benefits"
import DisplayBest from '../components/Layout/DisplayBest'
import TowPartBaner from "../components/Layout/TowPartBaner"
import ContainerProductOverView from "../components/Layout/ContainerProductOverView"
import Footer from '../components/Layout/Footer'
import SelectedDiscountedProduct from '../components/Layout/SelectedDiscountedProduct'
import ContainerCards from '../components/Layout/ContainerCards'
import AmazingOff from "../components/Layout/AmazingOff"
import CelebratedBrands from "../components/Layout/CelebratedBrands"
import ShopBasedOnCategory from "../components/Layout/ShopBasedOnCategory"
import Main from "../components/Layout/Main"


import TopBaner from "../components/Presentational/TopBaner"
import FourPartBaner from "../components/Presentational/FourPartBaner"
import BuyFromSuperMarket from "../components/Presentational/BuyFromSuperMarket"
import AmazingSuperMarket from "../components/Presentational/AmazingSuperMarket"
import Wait   from "../components/Presentational/Wait"

import { useData } from "../contexts/dataContext"

function HomePage() {
    const {isLoading} = useData();

    if(isLoading === true){ 
        return(
        <div className="container-xxl p-0">
            <Wait />
        </div>
        );
    }

    if(isLoading === false){
        return (
            <div className="container-xxl p-0">
                <TopBaner />
                <Header />
                <Stories />
                <Slider />
                <BuyFromSuperMarket />
                <Benefits />
                <AmazingOff />
                <Main>
                    <FourPartBaner slice={[0, 4]} />
                    <AmazingSuperMarket />
                    <FourPartBaner slice={[4, 8]} />
                    <ShopBasedOnCategory />
                    <TowPartBaner />
                    <CelebratedBrands />
                    <ContainerProductOverView slice={[0, 4]} />
                    <DisplayBest title={"پرفروش ترین کالاها"} slice={[0, 6]} />
                    <ContainerProductOverView slice={[4, 8]} />
                    <SelectedDiscountedProduct  />
                    <DisplayBest title={"داغ ترین چند ساعت گذشته"} slice={[6, 12]} />
                    <ContainerCards />
                </Main>
                <Footer />
            </div>
        )}
    
}

export default HomePage
