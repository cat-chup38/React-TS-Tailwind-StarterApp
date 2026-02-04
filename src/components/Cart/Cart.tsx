import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Link } from 'react-router-dom';

// Components
import { Grid } from './Grid';
import { removeFromCart } from '../../store/slices/cart.slice';
import type { CartItemType } from '../../types/producto.type';


export const Cart = () => {
    const { items } = useAppSelector((state) => state.cart); // Obtener de Redux los items del carrito
    const dispatch = useAppDispatch();

    const handleRemoveFromCart = (producto: CartItemType) => {
        dispatch(removeFromCart(producto.id));
        console.log(`${producto.title} eliminado del carrito`)
    };

    if (items.length === 0) {
        return (
            <div className="p-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
                <Link to="/" className="text-sky-600 underline">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Carrito</h1>
            <Grid rowItems={items} onActionClick={handleRemoveFromCart} />
        </div>
    );
}