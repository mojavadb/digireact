import ProductsOverView from "./ProductsOverView"
import { useData } from "../../contexts/DataContext";
import { useWidth } from "../../contexts/InnerWidthContext";

function ContainerProductOverView({slice}) {
    const {width} = useWidth();
    const {ProductOverView} = useData();

    // DRIVED STATE EXTRACTION FROM DATA
    const eachProductPart = ProductOverView.slice(slice[0], slice[1]);

    return (
        <div className={`d-flex my-3 p-2 p-lg-3 ${width > 992 && "mx-4 border-type-one"}
        ${width > 992 && "flex-row"}
        ${width < 992 && width > 576 && "flex-row flex-wrap"}
        ${width < 576 && "flex-column"}`}>
        {
            eachProductPart.map((part, index) =>
            <ProductsOverView isLatest={index === eachProductPart.length-1}
            key={part.id} width={width} product={part} />
            )
        }
        </div>
    )
    
}

export default ContainerProductOverView