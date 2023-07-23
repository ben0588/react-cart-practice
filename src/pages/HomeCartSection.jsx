import CartTableTr from '../components/CartTableTr';
import useCartContext from '../store/useCartContext';

const HomeCartSection = () => {
    const { state } = useCartContext();

    return (
        <table className='table table-responsive align-middle bg-light p-0'>
            <tbody>
                {state?.cart?.length > 0 ? (
                    state?.cart?.map((product) => (
                        <CartTableTr
                            key={product.id}
                            id={product.id}
                            imgPath={product.imgPath}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className='text-center fw-bolder fs-5 bg-light py-3'>
                            購物車沒有任何品項
                        </td>
                    </tr>
                )}

                {state?.total > 0 && (
                    <tr>
                        <td colSpan='5' className='text-end fw-bolder'>
                            總金額 NT$ {state?.total}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
export default HomeCartSection;
