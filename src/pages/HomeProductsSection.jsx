import Card from '../components/Card';

const HomeProductsSection = ({ productData }) => {
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {productData.map((product) => (
                // 使用資料驅動，元件與排版分離
                <div className='col' key={product.id}>
                    <Card id={product.id} imgPath={product.img} title={product.title} price={product.price} />
                </div>
            ))}
        </div>
    );
};
export default HomeProductsSection;
