import React from 'react';
import { useAppSelector } from '../../hooks/storeHooks';
import { Link } from 'react-router-dom';


interface HeaderProps {
    title: string;
}

export const NavBar: React.FC<HeaderProps> = ({ title }) => {
    const { items } = useAppSelector((state) => state.cart);
    const total = items.length;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                {/* Lado Izquierdo: Título/Logo */}
                <Link to="/" className="flex items-center gap-4">
                    <div  className="h-8 w-8 rounded-lg bg-sky-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SS</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        {title}
                    </h1>
                </Link>

                {/* Lado Derecho: Acciones */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/cart"
                        className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors relative">
                        Carrito
                        <span className="ml-2 bg-sky-600 text-white px-2 py-0.5 rounded-full text-xs">
                            {total}
                        </span>
                    </Link>
                    <div className="h-8 w-8 rounded-full bg-slate-300 border border-slate-400"></div>
                </div>

                </div>
            </div>
        </nav>
    );
};