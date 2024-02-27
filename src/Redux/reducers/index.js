import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import features from "./features";
export default combineReducers({
    auth,
    features
})