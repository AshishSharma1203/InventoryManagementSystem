
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (page = 0) => {
    const response = await axios.get(`http://localhost:8080/api/inventory?page=${page}&size=2`);
    console.log(response.data)
    return response.data;
});
 
export const addSupplier = createAsyncThunk('suppliers/addSupplier', async (newSupplier) => {
    const response = await axios.post('http://localhost:8080/api/suppliers', newSupplier);
    return response.data;
});
 
export const updateInventory = createAsyncThunk('inventory/updateInventory', async (updatedInventory) => {
    console.log(updateInventory)
    const response = await axios.put(`http://localhost:8080/api/inventory/${updatedInventory.id}`, updatedInventory);
    return response.data;
});
 
export const deleteInventory = createAsyncThunk('inventory/deleteInventory', async (id) => {
    await axios.delete(`http://localhost:8080/api/inventory/${id}`);
    return id;
});
 
const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInventory.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addSupplier.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(updateInventory.fulfilled, (state, action) => {
                const index = state.list.findIndex((inventory) => {
                  console.log(inventory)
                  console.log(action)
                  return inventory.id === action.payload.id
                });
                state.list[index] = action.payload;
            })
            .addCase(deleteInventory.fulfilled, (state, action) => {
                state.list = state.list.filter((inventory) => inventory.id !== action.payload);
            });
    },
});
 
export default inventorySlice.reducer;
