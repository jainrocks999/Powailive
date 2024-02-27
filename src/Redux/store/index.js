import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import Saga from "../Saga";
const saga=createSagaMiddleware()
const store=configureStore({
     reducer:rootReducer,
      middleware:()=>{
      return  [saga]
      }
})
saga.run(Saga)
export default store