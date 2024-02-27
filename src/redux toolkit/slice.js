import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const MySlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
});


export const loginUser = createAsyncThunk(
  'user/login',
  async ({email, password}, thunkAPI) => {
    try {
      const response = await fetch(
        'http://45.79.123.102:48006/api/user/login',
        {
          method: 'POST',
          body: JSON.stringify({email, password}),
        },
      );

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
//   extraReducers: {
//     [loginUser.pending]: state => {
//       state.loading = true;
//       state.error = null;
//     },
//     [loginUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.token = action.payload.data.token;
//       state.userInfo = action.payload.data.findUser;
//     },
//     [loginUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },

export default MySlice.reducer;



