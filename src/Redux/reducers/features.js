import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userdetails:{ }
}

const feature=createSlice({
    name:'auth',
    initialState,
    reducers:{
        fetSliderReq:(state,action)=>{
            return {...state,userdetails:{name:'teest',email:'test@gmail.com'}}
        }
    }
})
export default feature.reducer