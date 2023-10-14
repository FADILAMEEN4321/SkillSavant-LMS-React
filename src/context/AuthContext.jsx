import {createContext,useState,useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import axios from '../services/axios'
import { toast } from 'react-toastify';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [studentProfile, setStudentProfile] = useState();
    

    const loginUser = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('login/', {
            email: e.target.email.value,
            password: e.target.password.value,
          });
      
          if (response.status === 200) {
            const data = response.data;
            console.log(data,'<---respone data')
            setAuthTokens(data);
            const decodedToken = jwt_decode(data.access);
            console.log(decodedToken)
            setUser(decodedToken);
            localStorage.setItem('authTokens', JSON.stringify(data));

            // // After a successful login, fetch student profile data
            // const user_id = decodedToken.user_id;
            // const profileResponse = await axios.get(`student-profile/${user_id}/`);

            // if (profileResponse.status === 200) {
            //   const studentProfileData = profileResponse.data;
            //   setStudentProfile(studentProfileData);
            //   console.log(studentProfileData,'<---------------studentProfileData')
            // }


            navigate('/');
          } 
        } catch (error) {
        // console.log(respone.message) 
        toast.error('Invalid Email or Password');
          
         
        }
      };


    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        console.log('dnjdsfjd')
        localStorage.removeItem('authTokens')
        console.log('ddvsdvzd')

        navigate('/login')

    }  

    let contextData = {
        loginUser:loginUser,
        logoutUser:logoutUser,
        user:user,
        authTokens:authTokens,
        studentProfile:studentProfile,
        setStudentProfile:setStudentProfile,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}