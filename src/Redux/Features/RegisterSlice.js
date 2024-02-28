import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../Api';
import { Alert } from 'react-native';
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userData: null,
};
// register
export const register = createAsyncThunk(
  'register',
  async (params, thunkApi) => {
    console.log(params.data);
    try {
      const response = await API.post('/api/user/register', params.data);
      console.log(
        '🚀 ~ file: RegisterSlice.js:12 ~ register ~ response:',
        response.data,
      );
      if (response.data.status) {
        params. navigation.navigate('login');
        Alert.alert('User Register Succesfuly');
      }
    } catch (error) {
      console.log('🚀 ~ file: RegisterSlice.js:16 ~ register ~ error:', error);
      Alert.alert(
        'Email Already Exit',
        'The email has already been taken. Please use a different email.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable:false}
      );
      return thunkApi.rejectWithValue(error);
    }
  },
);
const RegisterSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>{
    // register cases
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(register.rejected, (state, action)=>{
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
  },
});
export default RegisterSlice.reducer;