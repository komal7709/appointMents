import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login'

const Protected = ({compo }) => {
 const {auth} = useSelector(state => state.admin)
    return auth ? compo : <Login/>
}

export default Protected