import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./authConstants"

export const authReducer = (state =  {} , { type, payload }) => {
    switch (type) {
   case LOGIN_REQUEST:return{loding:true}
   case LOGIN_SUCCESS:return{loding:false,auth:payload }
   case LOGIN_FAIL:return{loding:false,error:payload}
   case LOGOUT:return{auth:null}
        default: return state
    }
}