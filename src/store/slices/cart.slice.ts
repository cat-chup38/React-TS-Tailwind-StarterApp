import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItemType } from '../../types/producto.type';


interface CartState {
    items: CartItemType[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Añadir producto o incrementar si ya existe
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                state.items[index].cantidadPedido += 1;
            } else {
                state.items.push(action.payload);
            }
        },
        // Quitar un producto completamente
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // Limpiar todo el carrito
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;