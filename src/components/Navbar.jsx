import useCartContext from '../store/useCartContext';

const Navbar = () => {
    const { state } = useCartContext();

    return (
        <nav className='d-flex justify-content-between align-items-center bg-light py-2 px-3'>
            <h1 className='fw-bolder fs-5 m-0'>香香麵攤</h1>
            <p className='d-flex justify-content-center align-items-center fw-bolder fs-6 m-0 '>
                購物車
                <span className='badge bg-danger'>{state.cart.length}</span>
            </p>
        </nav>
    );
};
export default Navbar;
