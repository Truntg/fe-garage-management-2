export const fetchOwners = createAsyncThunk(
    'book/fetchBooks',
    async (payload, thunkAPI) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    }
  )