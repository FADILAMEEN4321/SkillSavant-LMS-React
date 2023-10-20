import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const StudentRoute = (props) => {
    let {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const { Component } = props
    
    useEffect(()=>{
        if(!user || user.role !== 'student'){
            navigate('/')
        }
    });

    return(
        <div>
            <Component/>
        </div>
    )

  
}

export default StudentRoute