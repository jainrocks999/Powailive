

// import AuthReducer from "./feature/authSlice";
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import RegisterSlice from './Features/RegisterSlice';
// import  FeatureReducer  from "./feature/featuresSlice";


const reducers = combineReducers({
    auth:AuthSlice,
    register:RegisterSlice,
    feature:FeatureSlice
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth','register'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};