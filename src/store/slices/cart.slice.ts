import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItemType } from '../../types/producto.type';

import { loadCartState } from '../localStorage';


interface CartState {
    items: CartItemType[];
}

const initialState: CartState = {
    items: loadCartState() || [],
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

        // -> ACTUALIZAR CANTIDAD A PEDIR DEL ITEM
        updateQuantity: (state, action: PayloadAction<{ id: number, delta: number }>) => {
            const { id, delta } = action.payload;
            const item = state.items.find(i => i.id === id);

            if (!item) return

            const newQuantity = item.cantidadPedido + delta;
            item.cantidadPedido = newQuantity > 0 ? newQuantity : 1;
        },

        // Limpiar todo el carrito
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;