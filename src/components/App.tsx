import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import { Catalogo } from '../components/Catalogo/Catalogo'
import { NavBar } from '../components/NavBar/NavBar'
import { Cart } from '../components/Cart/Cart'

import { store } from './../store';


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar title='Shopping Store' />
                <Routes>
                    <Route path="/" element={<Catalogo />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}