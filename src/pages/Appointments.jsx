import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBookingAction, deleteBooking, getAllBookings, updateBooking } from '../redux/bookings/bookingActions'

const Appointments = () => {
    const [selectedBooking, setSelectedBooking] = useState({})
    const { loading, bookings, error, bookingDeleted, bookingCreate, bookingUpdated } = useSelector(state => state.reservation)

    const [bookingData, setBookingData] = useState({
        name: "john",
        email: "john@gmail.com",
        mobile: 123123123,
        gender: "male",
        date: "2023-10-20"
    })
    const callAction = useDispatch()
    useEffect(() => {
        callAction(getAllBookings())
    }, [bookingDeleted, bookingCreate, bookingUpdated])

    const BOOKING_TABLE = bookings && bookings.length > 0
        ? <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>gender</th>
                    <th>date</th>
                    <th>actions</th>  
                </tr>                                         
            </thead>         
            <tbody>             
                {                                            
                    bookings.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.gender}</td>
                        <td>{item.date}</td>
                        <td>
                            <button
                                onClick={e => setSelectedBooking(item)}
                                data-bs-toggle="modal"
                                data-bs-target="#editModal">
                                edit
                            </button>
                            <button onClick={e => callAction(deleteBooking(item.id))}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        : <h4>No Booking Found</h4>
    const handleChange = e => {
        const { value, name } = e.target
        setBookingData({ ...bookingData, [name]: value })
    }

    if (loading) return <h1>Loading.......</h1>
    return <>

        <div className="container mt-5">
            <div className='text-end'>
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#addBooking"
                    type="button"
                    class="btn btn-primary">+Add</button>
            </div>
            {BOOKING_TABLE}
        </div>

        {/* form start */}


        <div class="modal fade" id="editModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            className='form-control my-2'
                            onChange={e => setSelectedBooking({ ...selectedBooking, name: e.target.value })}
                            type="text"
                            value={selectedBooking.name}
                        />
                        <input
                            className='form-control my-2'
                            onChange={e => setSelectedBooking({ ...selectedBooking, email: e.target.value })}
                            type="text"
                            value={selectedBooking.email}
                        />
                        <input
                            className='form-control my-2'
                            onChange={e => setSelectedBooking({ ...selectedBooking, mobile: e.target.value })}
                            type="text"
                            value={selectedBooking.mobile}
                        />
                        <input
                            className='form-control my-2'
                            onChange={e => setSelectedBooking({ ...selectedBooking, date: e.target.value })}
                            type="text"
                            value={selectedBooking.date}
                        />

                        <input checked={selectedBooking.gender === "male"} onChange={e => setSelectedBooking({ ...selectedBooking, gender: e.target.value })} type="radio" name='gender' id='male' value="male" /> <label htmlFor="male">male</label>
                        <input checked={selectedBooking.gender === "female"} onChange={e => setSelectedBooking({ ...selectedBooking, gender: e.target.value })} type="radio" name='gender' id='female' value="female" /> <label htmlFor="female">female</label>

                        <button
                            onClick={e => callAction(updateBooking(selectedBooking))}
                            data-bs-dismiss="modal"
                            type="button"
                            class="btn btn-primary" >upate Booking</button>
                    </div>

                </div>
            </div>
        </div>

        {/* form end */}

        {/* add booking start */}

        <div class="modal fade" id="addBooking" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input className='form-control my-3' onChange={handleChange} value={bookingData.name} type="text" name='name' placeholder='enter name' />
                        <input className='form-control my-3' onChange={handleChange} value={bookingData.email} type="text" name='email' placeholder='enter email' />
                        <input className='form-control my-3' onChange={handleChange} value={bookingData.mobile} type="text" name='mobile' placeholder='enter mobile' />
                        <input className='form-control my-3' onChange={handleChange} value={bookingData.date} type="date" name='date' placeholder='enter date' />
                        <input className='form-check-input' onChange={handleChange} value="male" type="radio" name='gender' /> <label htmlFor="">male</label>
                        <input className='form-check-input' onChange={handleChange} value="female" type="radio" name='gender' /> <label htmlFor="">female</label>
                        <button data-bs-dismiss="modal" className='btn btn-dark w-100 btn-lg' onClick={e => callAction(addBookingAction(bookingData))}>add booking</button>
                    </div>

                </div>
            </div>
        </div>
        {/* add booking end */}

    </>
}

export default Appointments
   
   