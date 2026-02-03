import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './../store';
import { Catalogo } from '../components/Catalogo/Catalogo'
// Importa tus componentes (ej. Home, CartPage)


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav>
                    <Link to="/">Tienda</Link>
                    <Link to="/cart">Carrito</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Catalogo />} />
                    {/* <Route path="/cart" element={<CartPage />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}