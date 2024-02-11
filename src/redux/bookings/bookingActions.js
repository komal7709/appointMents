
import { useSelector } from "react-redux"
import {

    ADD_BOOKING_FAIL,
    ADD_BOOKING_RECQUEST,
    ADD_BOOKING_SUCCESS,

    DELETE_BOOKING_FAIL,

    DELETE_BOOKING_RECQUEST,

    DELETE_BOOKING_SUCCESS,
    GET_BOOKING_FAIL,
    GET_BOOKING_RECQUEST,
    GET_BOOKING_SUCCESS,
    UPDATE_BOOKING_FAIL,
    UPDATE_BOOKING_RECQUEST,
    UPDATE_BOOKING_SUCCESS,


} from "./BookingConstants"
import axios from "axios"

export const addBookingAction = bookingData => async dispatch => {

    try {
        dispatch({ type: ADD_BOOKING_RECQUEST })
        const { data } = await axios.post("http://localhost:5000/bookings", bookingData)
        dispatch({ type: ADD_BOOKING_SUCCESS })
    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_BOOKING_FAIL, payload: error.message })
    }




}
export const getAllBookings = () => async dispatch => {
    try {
        dispatch({ type: GET_BOOKING_RECQUEST })
        const { data } = await axios.get("http://localhost:5000/bookings")
        dispatch({ type: GET_BOOKING_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_BOOKING_FAIL, payload: error.message })
    }
}


export const deleteBooking = (id) => async dispatch => {
    try {
        dispatch({ type: DELETE_BOOKING_RECQUEST })
        const { data } = await axios.delete(`http://localhost:5000/bookings/${id}`)
        dispatch({ type: DELETE_BOOKING_SUCCESS })

    } catch (error) {
        dispatch({ type: DELETE_BOOKING_FAIL, payload: error.message })
    }
}

export const updateBooking = bookingData => async dispatch=>{
    try {
        dispatch({type:UPDATE_BOOKING_RECQUEST})
        const {data} = await axios.put(`http://localhost:5000/bookings/${bookingData.id}`, bookingData)
        dispatch({type:UPDATE_BOOKING_SUCCESS})
    } catch (error) {
        dispatch({type:UPDATE_BOOKING_FAIL,payload:error.message})
    }
}