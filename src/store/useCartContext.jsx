import { useContext } from 'react';
import CartContext from './CartContext';

const useCartContext = () => {
    const state = useContext(CartContext);
    if (!state) {
        return new Error('無效 useContext 需要搭配 ContextProvider');
    }
    return state;
};
export default useCartContext;
