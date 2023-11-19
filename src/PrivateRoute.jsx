import React,{useContext} from 'react';
import AuthContext from './context/AuthContext';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({element, roles}) => {
    const { user } = useContext(AuthContext);

    if(!user){
        // Redirect to login if the user is not authenticated.
        return <Navigate to="/login" />;
    }

    if(roles && !roles.includes(user.role)){
        // Redirect to a forbidden page if the user doesn't have the required role.
        return <Navigate to="/login" />;
    }
  
  // Render the protected component  
  return element;

};

export default PrivateRoute