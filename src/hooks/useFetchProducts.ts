import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './storeHooks';
import { fetchProducts } from '../store/slices/product.slice';

export const useFetchProducts = () => {
    const dispatch = useAppDispatch();

    // Leemos el estado del slice 'products' definido en la store
    const { items, loading, error } = useAppSelector((state) => state.products);

    useEffect(() => {
        // Solo llamamos a la API si la lista de productos está vacía
        if (items.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, items.length]);

    return {
        products: items,
        loading,
        error
    };
};