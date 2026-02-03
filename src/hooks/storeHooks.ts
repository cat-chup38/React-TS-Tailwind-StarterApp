import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Estos son los hooks que usarás en tus componentes
// useAppDispatch: sirve para disparar acciones (como addToCart o fetchProducts)
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useAppSelector: sirve para leer los datos de la Store (como los productos o el carrito)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;