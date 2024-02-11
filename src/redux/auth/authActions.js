import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL, LOGOUT } from "./authConstants"

export const loginAction = userData => async dispatch=> {
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data} = await axios.get("  http://localhost:5000/admin",{
            params:userData
        })
        // console.log(data);
        if(data.length > 0){
            dispatch({type:LOGIN_SUCCESS,payload:data[0]})
            localStorage.setItem("user",JSON.stringify(data[0]))
        }else {
            dispatch({type:LOGIN_FAIL,payload:"Invalide Email Or Password"})
        }
        // dispatch({type:LOGIN_SUCCESS,payload:data})
    } catch (error) {
        console.log(error);
        dispatch({LOGIN_FAIL,payload:error.message})
    }
}

export const logoutAction = userData => async dispatch=> {
try {
   dispatch({type:LOGOUT})
   localStorage.removeItem("user")
} catch (error) {
    console.log(error);
    dispatch({LOGIN_FAIL,payload:error.message})
}
}