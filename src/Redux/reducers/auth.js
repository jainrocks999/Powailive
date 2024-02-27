import { createSlice } from "@reduxjs/toolkit";
import {API} from '../Api';
const initialState={
    userdetails:{ }
}

const auth=createSlice({
    name:'auth',
    initialState:{
        user: null,

    },
    reducers:{
        loginRequest:(state)=>{
            return {...state,userdetails:{name:'teest',email:'test@gmail.com'}}
        },
        loginSuccess:(state,action)=>{
            return {...state,userdetails:{name:'teest',email:'test@gmail.com'}}
        },
        loginError:(state)=>{
            return {...state,userdetails:{name:'teest',email:'test@gmail.com'}}
        }
    }
})
export default auth.reducer


