/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.sevrice"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageOwner: null
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkYTBhNDAzLWRiOWYtNDAyZC1hOGUzLTM1NjZhN2JiMmVjZiIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5OTUyMDksImV4cCI6MTY5OTAzMTIwOX0.Vc-2xcx3iVxAjDKu8TFhZwWs5d2enomRi4mS_SIGIF4'
localStorage.setItem('accessToken', token )
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async (payload) => {
  try {
    const response = await axiosInstance.get('users', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});

export const fetchOwnersById = createAsyncThunk('owner/fetchOwnersById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/users/${payload}`, {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});


const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });
  },
})
const ownerReducer = ownerSlice.reducer
export default ownerReducer

