import { createContext, useEffect, useReducer } from 'react';

const initialValues = {
    cart: [],
    cartTotal: 0,
};

const CartContext = createContext(initialValues);

const sumProductPrice = (cart) => cart.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0);

const cartReducer = (state, action) => {
    const cartList = [...state.cart];
    const index = cartList.findIndex((item) => item.id === action.payload.id);
    switch (action.type) {
        case 'ADD_CART_ITEM':
            if (index === -1) {
                cartList.push(action.payload);
            } else if (cartList[index].quantity >= 99) {
                cartList[index].quantity = 99;
            } else {
                cartList[index].quantity += action.payload.quantity;
            }
            return {
                ...state,
                cart: cartList,
                total: sumProductPrice(cartList),
            };
        case 'DELETE_CART_ITEM':
            if (index !== -1) {
                cartList.splice(index, 1);
            }
            return {
                ...state,
                cart: cartList,
                total: sumProductPrice(cartList),
            };
        case 'UPDATE_CART_ITEM_QUANTITY':
            if (index !== -1) {
                cartList[index].quantity = action.payload.quantity;
            }
            return {
                ...state,
                cart: cartList,
                total: sumProductPrice(cartList),
            };

        default:
            return state;
    }
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialValues);

    const handleAddCartItem = (value) => {
        dispatch({
            type: 'ADD_CART_ITEM',
            payload: value,
        });
    };

    const handleDeleteCartItem = (id) => {
        dispatch({
            type: 'DELETE_CART_ITEM',
            payload: { id },
        });
    };

    const handleUpdateCartItemQuantity = (id, quantity) => {
        dispatch({
            type: 'UPDATE_CART_ITEM_QUANTITY',
            payload: { id, quantity },
        });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    const value = {
        state,
        handleAddCartItem,
        handleDeleteCartItem,
        handleUpdateCartItemQuantity,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
