// srd
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { bookingReducer } from "./bookings/bookingReducer"
import { authReducer } from "./auth/authReducer"

const rootReducer = combineReducers({
    reservation: bookingReducer,
    admin:authReducer
})
 const initialValue = {
    admin:{
        auth: JSON.parse(localStorage.getItem("user"))
    }
}
const reduxStore = createStore(
    rootReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore
