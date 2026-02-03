import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ProductoType } from '../../types/producto.type';


interface ProductState {
  items: ProductoType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

// Acción asíncrona para traer productos
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('No se pudieron cargar los productos');
    const data = await response.json();
    return data as ProductoType[];
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error desconocido';
      });
  },
});

export default productSlice.reducer;