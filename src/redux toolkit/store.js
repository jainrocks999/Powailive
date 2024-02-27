import { configureStore } from '@reduxjs/toolkit';
import Slice from './slice';
 const store = configureStore({
  reducer: {
    data: Slice
  },
});
export default store;