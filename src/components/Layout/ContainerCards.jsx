import { Link } from 'react-router-dom'
import Card from '../Presentational/Card'
import { useData } from '../../contexts/dataContext';
function ContainerCards() {
    const {articles} = useData();
    
    return (
        <div className='p-2 p-md-3 px-lg-4'>
            <div className='my-3 mx-2 d-flex align-items-center justify-content-between'>
                <h6 className='fs-6 mb-0 fw-bold'>
                    خواندنی&zwnj;ها
                </h6>
                <Link to="" className='text-decoration-none fs-14px'>
                    مطالب بیشتر در دیجی مگ
                </Link>
            </div>
            <div className='d-lg-flex'>
                {
                articles.map(article => 
                    <Card key={article.text} article={article} />
                    )
                }
            </div>
        </div>
    )
}

export default ContainerCards
