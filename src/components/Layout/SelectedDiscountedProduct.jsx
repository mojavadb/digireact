import DiscountedProduct from '../Presentational/DiscountedProduct'
import styles from './SelectedDiscountedProduct.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../contexts/DataContext';
import { useWidth } from '../../contexts/InnerWidthContext';

function SelectedDiscountedProduct() {
    const {width} = useWidth();
    const {SelectedDiscountedProduct} = useData();
    
    const off = <FontAwesomeIcon icon={faTags} color='#ef4056' />
    return (
        <section className={`my-3 p-2 p-lg-3 ${width > 992 ? "mx-4 border-type-one" : ""}`}>
            <h6 className='text-center fw-bold'>
                <span className='px-1 fs-6'>
                    {off}
                </span>
                <span className='px-1 fs-5'>
                    منتخب محصولات تخفیف و حراج
                </span>
            </h6>
            <div className={`d-grid ${styles.columnsCounting}`}>
                {
                SelectedDiscountedProduct.map(product => 
                        <DiscountedProduct key={product.id} product={product} />
                    )
                }
            </div>
        </section>
    )
}

export default SelectedDiscountedProduct
