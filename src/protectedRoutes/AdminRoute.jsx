import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const AdminRoute = (props) => {

  let {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const { Component } = props

  useEffect(()=>{
    if(!user || user.role !== 'admin'){
      navigate('/')
  }
  })

  return (
    <div>
       <Component/>
    </div>
  )
}

export default AdminRoute