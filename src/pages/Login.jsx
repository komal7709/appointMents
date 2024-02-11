import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../redux/auth/authActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {auth}= useSelector(state => state.admin)
  const [userData, setuUerData] = useState({
    email:"admin@gmail.com",
    password:"123"
  })
  const callAction = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
  if(auth){
    navigate("/bookings")
  }
  },[auth])
  return <>
     
     <div class="container">
           <div class="row">
             <div class="col-sm-6 offset-sm-3">
               <div class="card">
                 <div class="card-header">Login</div>
                 <div class="card-body">
                   <div>
                     <label for="email" class="form-label">First Email</label>
                     <input
                       type="text"
                       class="form-control"
                       id="email"
                       placeholder="Enter Your Email"
                       value={userData.email}
                      onChange={e=> setuUerData({...userData,email: e.target.value})}
                     />
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>
                   <div class="mt-2">
                     <label for="password" class="form-label">Password</label>
                     <input
                       type="password"
                       class="form-control"
                       id="password"
                       placeholder="Enter Your Password"
                       value={userData.password}
                       onChange={e=> setuUerData({...userData,email: e.target.value})}
                     />
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>
                   <button onClick={e=> callAction(loginAction(userData))} type="button" class="btn btn-primary w-100 mt-3">
                     Login
                   </button>
                   <p class="text-center mt-3">
                     Dont Have Account? <a href="#">Create Account</a>
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>


  </>
}

export default Login


// js work
// js mde object print ny hot
// input-ci value kasi anayci => onchange=e.value.target
// 
                             


  