import { Link } from "react-router-dom"
import SearchInput from "../components/Presentational/SearchInput"
import TrendsSearches from "../components/Presentational/TrendsSearches"

function SearchPageDesktop({query, setQuery}) {
    return (
        <div className="bg-white z-10 position-absolute rounded-2 top-0 end-0 w-100 shadow">
            <SearchInput className={"bg-white border-type-tow pb-2 border-info"} query={query} setQuery={setQuery} />
            <div className="d-flex flex-column gap-2">
                <Link to="" className="py-3 px-5">
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e96175f42bf50f67ce9296b095e21a3c7729fd87_1746453792.jpg?x-oss-process=image/quality,q_95/format,webp" alt="شام حاضره" 
                    className="w-100 rounded-4" title="سفارش فوری" />
                </Link>
                <div className="pb-3 px-4">
                    <TrendsSearches />
                </div>
            </div>
        </div>
    )
}

export default SearchPageDesktop
