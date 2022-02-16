import { createSlice, nanoid, createAsyncThunk } from 'redux-thunk'

const initialState = {
  usernames: [],
  status: 'idle',
  error: null
}

export const fetchUsernames = createAsyncThunk('usernameSuggestions/fetchUsernames', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.map((item) => item.username)
})

const suggestionsSlice = createSlice({
  name: 'usernames',
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsernames.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsernames.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.usernames = state.usernames.concat(action.payload)
      })
      .addCase(fetchUsernames.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default suggestionsSlice

