/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.sevrice"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageService: null
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkYTBhNDAzLWRiOWYtNDAyZC1hOGUzLTM1NjZhN2JiMmVjZiIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5OTUyMDksImV4cCI6MTY5OTAzMTIwOX0.Vc-2xcx3iVxAjDKu8TFhZwWs5d2enomRi4mS_SIGIF4'
localStorage.setItem('accessToken', token )
export const fetchServices = createAsyncThunk('service/fetchServices', async (payload) => {
  try {
    const response = await axiosInstance.get('services', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});


const ownerSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.manageService = action.payload;
    });
  },
})
const serviceReducer = ownerSlice.reducer
export default serviceReducer