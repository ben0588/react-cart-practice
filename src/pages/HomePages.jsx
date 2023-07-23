import productsData from '../assets/sass/productsData';
import Navbar from '../components/Navbar';
import HomeProductsSection from './HomeProductsSection';
import HomeCartSection from './HomeCartSection';

const HomePages = () => {
    return (
        <div>
            <Navbar />
            <div className='container mt-3'>
                <div className='row g-4'>
                    <div className='col-7'>
                        <HomeProductsSection productData={productsData} />
                    </div>
                    <div className='col-5'>
                        <HomeCartSection />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePages;
