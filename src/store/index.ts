import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart.slice';
import productReducer from './slices/product.slice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

// Estos tipos son CRUCIALES para que los hooks de arriba funcionen
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;