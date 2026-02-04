// src/store/localStorage.ts
import type { RootState } from '../store';


// Guarda el estado del carrito
export const saveCartState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state.cart.items);
        localStorage.setItem('cart_items', serializedState);
    } catch (err) {
        console.error("No se pudo guardar el carrito:", err);
    }
};

// Carga el estado inicial
export const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart_items');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};