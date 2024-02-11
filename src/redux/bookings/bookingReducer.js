import { ADD_BOOKING_FAIL, ADD_BOOKING_RECQUEST, ADD_BOOKING_SUCCESS, DELETE_BOOKING_FAIL, DELETE_BOOKING_RECQUEST, DELETE_BOOKING_SUCCESS, GET_BOOKING_FAIL, GET_BOOKING_RECQUEST, GET_BOOKING_SUCCESS, UPDATE_BOOKING_FAIL, UPDATE_BOOKING_RECQUEST, UPDATE_BOOKING_SUCCESS } from "./BookingConstants"


export const bookingReducer = (state = { bookings: [] }, { type, payload }) => {
    switch (type) {
        case ADD_BOOKING_RECQUEST: return { ...state, loading: true }
        case ADD_BOOKING_SUCCESS: return { ...state, bookingCreate: true, loading: false }
        case ADD_BOOKING_FAIL: return { ...state, error: payload, loading: false }


        case GET_BOOKING_RECQUEST: return { loading: true }
        case GET_BOOKING_SUCCESS: return { loading: false, bookings: payload }
        case GET_BOOKING_FAIL: return { loading: false, error: payload }

        case DELETE_BOOKING_RECQUEST: return { ...state, loading: true }
        case DELETE_BOOKING_SUCCESS: return { ...state, loading: false, bookingDeleted: true }
        case DELETE_BOOKING_FAIL: return { ...state, loading: false }

        case UPDATE_BOOKING_RECQUEST: return { ...state, loading: true }
        case UPDATE_BOOKING_SUCCESS: return { ...state, loading: false, bookingupdated: true }
        case UPDATE_BOOKING_FAIL: return { ...state, loading: false, error:payload }

        default: return state
    }
}