import useCartContext from '../store/useCartContext';

const CartTableTr = ({ id, imgPath, title, price, quantity }) => {
    const { handleDeleteCartItem, handleUpdateCartItemQuantity } = useCartContext();
    return (
        <tr className=''>
            <th className='d-block d-lg-table-cell px-0'>
                <button
                    type='button'
                    className='btn btn-sm'
                    onClick={() => handleDeleteCartItem && handleDeleteCartItem(id)}
                >
                    x
                </button>
            </th>
            <td className='d-block d-lg-table-cell px-0 '>
                <img
                    src={imgPath}
                    alt={title}
                    style={{ height: `70px`, width: `70px` }}
                    className='d-block object-fit m-auto m-lg-0'
                />
            </td>
            <td className='d-block d-lg-table-cell text-center text-lg-start px-0'>
                <h5 className='fs-6 fw-bolder m-0'>{title}</h5>
                <small className='text-muted'>NT$ {price}</small>
            </td>
            <td className='position-relative d-block d-lg-table-cell px-0'>
                <select
                    className='form-select'
                    onChange={(e) => {
                        let newQuantity = parseInt(e.target.value);
                        handleUpdateCartItemQuantity && handleUpdateCartItemQuantity(id, newQuantity);
                    }}
                    value={quantity}
                >
                    {Array.from(Array(99)).map((_, index) => (
                        <option value={index + 1} key={index}>
                            {index + 1}
                        </option>
                    ))}
                </select>
                {quantity === 99 && (
                    <small className='position-absolute start-0 bottom-0 text-danger fw-bolder'>已超過購買上限</small>
                )}
            </td>
            <td className='d-block d-lg-table-cell text-center text-lg-end fw-bolder  px-0'>NT$ {price * quantity}</td>
        </tr>
    );
};
export default CartTableTr;
