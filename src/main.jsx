import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/sass/all.scss';
import { CartContextProvider } from './store/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
        <App />
    </CartContextProvider>
);
