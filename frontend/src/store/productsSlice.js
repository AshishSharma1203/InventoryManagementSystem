import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductSuppliers = createAsyncThunk(
  'products/fetchSuppliers',
  async (productId) => {
    const response = await axios.get(`/api/products/${productId}/suppliers`);
    return response.data;
  }
);

export const updateProductSupplier = createAsyncThunk(
  'products/updateSupplier',
  async ({ productId, supplierId, details }) => {
    const response = await axios.put(`/api/products/${productId}/suppliers/${supplierId}`, details);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    await axios.delete(`/api/products/${productId}`);
    return productId;
  }
);

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSuppliers.fulfilled, (state, action) => {
      })
      .addCase(updateProductSupplier.fulfilled, (state, action) => {
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.products.findIndex(product => product.id === action.payload.id);
//       if (index !== -1) {
//         state.products[index] = action.payload;
//       }
//     },
//     deleteProduct: (state, action) => {
//       state.products = state.products.filter(product => product.id !== action.payload);
//     },
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;

// export default productsSlice.reducer;
