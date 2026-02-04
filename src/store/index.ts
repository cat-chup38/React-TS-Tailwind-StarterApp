import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart.slice';
import productReducer from './slices/product.slice';
import { saveCartState } from './localStorage';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

// Suscripción: Se ejecuta cada vez que el estado cambia
store.subscribe(() => {
    saveCartState(store.getState());
});

// Types importantes para que los hooks de arriba funcionen
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;