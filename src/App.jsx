import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Dynamic from './pages/Dynamic'
import Test from './pages/Test'
import Protected from './components/protected'

const App = () => {
  // return<Test />
  // return <>
  //   <Protected data= {<Test />}/>
  // </>
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/booking' element={<Appointments />} />
        <Route path='/dynamic' element={<Dynamic />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App