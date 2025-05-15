import Category from '../Presentational/Category'
import styles from './ShopBasedOnCategory.module.css'
import { useData } from '../../contexts/dataContext';
import { useWidth } from '../../contexts/InnerWidthContext';

function ShopBasedOnCategory() {
    const {width} = useWidth();
    const {ShopBasedOnCategory} = useData();

    let totalWidth;
    if(width > 768){
        totalWidth = `${186 * 9}px`;
    }else{
        if(width > 576){
            totalWidth = `auto`;
        }
        else{
            totalWidth = `${122 * 6}px`;
        }
    }

    return (
        <div className='p-2'>
    <p className={`text-center mb-md-4 fw-bold ${width > 768 ? "fs-4" : ""}`}>خرید بر اساس دسته بندی</p>
    <div 
    className={`overflow-auto py-2 ${styles.scrollbarHidden}`}>
        <div className={`${styles.container}`}
        style={{minWidth: `${totalWidth}`}}>
    {
        ShopBasedOnCategory.map(category =>
            <Category key={category.id} category={category} />
        )
    }
        </div>
    </div>
        </div>
    )
    
}

export default ShopBasedOnCategory
