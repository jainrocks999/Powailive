import { Alert } from "react-native"
import { call, takeEvery } from "redux-saga/effects"
import Api from "../Api"

 function* login(){
     try {
    const res=    yield call(Api.login)
     } catch (error) {
        console.log(error);
     }
 }
function* Saga(){
    yield takeEvery('auth/loginRequest',login)
}
export default Saga