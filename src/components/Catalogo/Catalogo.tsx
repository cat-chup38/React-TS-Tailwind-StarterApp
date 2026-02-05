// Hooks
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';

import { addToCart, removeFromCart } from '../../store/slices/cart.slice';

import type { ProductoType, CartItemType } from '../../types/producto.type';

import { Grid } from './Grid';


export const Catalogo = () => {
    const { products, loading, error } = useFetchProducts(); // Obtenemos los productos, el estado de carga y el error del hook
    const dispatch = useAppDispatch();

    const cartIds = useAppSelector((state) =>
        state.cart.items.map((item: CartItemType) => item.id)
    );

    const handleAddToCart = (producto: ProductoType) => {
        const isAdded = cartIds.includes(producto.id);

        if (isAdded)
            removeProduct(producto);
        else
            addProduct(producto);
    };

    const addProduct = (producto: ProductoType) => {
        const newItem: CartItemType = {
            ...producto,
            cantidadPedido: 1 // Inicializamos la cantidad al agregar por primera vez
        };

        dispatch(addToCart(newItem));
    };

    const removeProduct = (producto: ProductoType) => {
        dispatch(removeFromCart(producto.id));
    };


    if (loading) {
        return <div className="p-10 text-center font-bold">Cargando productos...</div>;
    }

    if (error) {
        return (
            <div className="p-10 text-red-500 text-center">
                <p>Hubo un error al cargar el catálogo:</p>
                <span>{error}</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
            <Grid rowItems={products} cartIds={cartIds} onActionClick={handleAddToCart} />
        </div>
    );
};