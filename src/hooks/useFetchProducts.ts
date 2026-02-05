import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './storeHooks';

// Store
import { fetchProducts } from '../store/slices/product.slice';
import { syncIsActive } from '../store/slices/cart.slice';

export const useFetchProducts = () => {
    const dispatch = useAppDispatch();

    // Leemos el estado del slice 'products' definido en la store
    const { items, loading, error } = useAppSelector((state) => state.products);

    useEffect(() => {
        /*
        // Solo llamamos a la API si la lista de productos está vacía
        if (items.length === 0) {
            dispatch(fetchProducts());
        }
        */
        dispatch(fetchProducts());
    }, [dispatch, items.length]);

    // EFECTO NUEVO: Cuando los items del catálogo cambien (se carguen), sincronizar el carrito.
    useEffect(() => {
        if (items.length > 0) {
            dispatch(syncIsActive(items));
        }
    }, [items, dispatch]);

    return {
        products: items,
        loading,
        error
    };
};