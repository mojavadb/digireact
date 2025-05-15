import SearchInput from "../components/Presentational/SearchInput"
import TrendsSearches from "../components/Presentational/TrendsSearches"


function SearchPageMobile({query, setQuery}) {
    

    return (
        <div>
            <div className="p-3 bg-white">
                <SearchInput className={"bg-light"} query={query} setQuery={setQuery} />
            </div>
            <div className="p-3 bg-white">
                {
                (query === "") 
                ? (
                <TrendsSearches />
                )
                : 
                (
                    <div>
                        <span className="fs-6">
                            {` در حال جستجو برای ${query}`}
                        </span>
                    </div>
                )
                }
                
            </div>
        </div>
    )
}

export default SearchPageMobile
