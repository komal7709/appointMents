import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../redux/auth/authActions'

const Navbar = () => {
  const {auth} = useSelector(state => state.admin)
const dispatch = useDispatch()
  return <>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <Link to={"/"} class="navbar-brand">Appointmnet pro</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          {
            auth
            ?<>
               <Link to={"/booking"} class="nav-link active">Home</Link>
               <Link to={"/dynamic"} class="nav-link" >Dynamic</Link>
               <button className='btn btn-danger' onClick={e=> dispatch(logoutAction())}>Logout</button>
            </>
            :<>
              <Link to={"/"} class="nav-link" >Login</Link>
            </>
          }
        </div>
      </div>
    </div>
  </nav>

  </>
}
 

export default Navbar