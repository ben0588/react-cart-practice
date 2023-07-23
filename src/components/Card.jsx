import { useState } from 'react';
import useCartContext from '../store/useCartContext';

const Card = ({ id, imgPath, title, price }) => {
    const { handleAddCartItem } = useCartContext();
    const [addQuantity, setAddQuantity] = useState(1);
    return (
        <div className='card h-100 border border-2'>
            <img src={imgPath} className='card-img-top object-fit w-100' alt={title} style={{ height: `180px` }} />
            <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center flex-column flex-xl-row'>
                    <h6 className='fs-6 fw-bolder mb-2 m-xl-0'>{title}</h6>
                    <small className='fw-bolder text-muted'>NT$ {price}</small>
                </div>
                <div className='btn-group d-flex justify-content-evenly align-items-center  mx-auto mt-3 '>
                    <button
                        type='button'
                        className='btn btn-light '
                        onClick={() => {
                            const minBuyQuantity = 1;
                            addQuantity > minBuyQuantity && setAddQuantity(addQuantity - 1);
                        }}
                    >
                        -
                    </button>
                    <select
                        className='form-select btn-group border-light'
                        onChange={(e) => setAddQuantity(parseInt(e.target.value))}
                        value={addQuantity}
                    >
                        {[...Array(99)].map((_, index) => (
                            <option value={index + 1} key={index}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                    <button type='button' className='btn btn-light ' onClick={() => setAddQuantity(addQuantity + 1)}>
                        +
                    </button>
                </div>
                <button
                    type='button'
                    className='btn btn-outline-info fw-bolder border-2 rounded-0  w-100 mt-2 py-1 '
                    onClick={() => {
                        handleAddCartItem({
                            id,
                            imgPath,
                            title,
                            price,
                            quantity: addQuantity,
                        });
                        setAddQuantity(1);
                    }}
                >
                    加入購物車
                </button>
            </div>
        </div>
    );
};

export default Card;
