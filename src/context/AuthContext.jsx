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
    let [userProfile, setUserProfile] = useState(null);
    

    const loginUser = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('student-login/', {
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
            toast.success('You are successfully logged in.')  
            navigate('/');
          } 
        } catch (error) {
        // console.log(respone.message) 
        toast.error(<div>
          <p className='text-md font-semibold'>Invaild Email or Password</p>
          <p className='text-xs font-light text-red-600'>Check your credentials and please try again.</p>
        </div>),{theme:"colored"};
          
         
        }
      };

      const loginInstructor = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('instructor-login/', {
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
            toast.success('You are successfully logged in.')
            navigate('/instructor/profile');
          } 
        } catch (error) {
        // console.log(respone.message) 
        toast.error('Invalid Email or Password');
              
        }
      };  

      const loginAdmin = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('admin-login/', {
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
            toast.success('You are successfully logged in.')
            navigate('/admin/dashboard');
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
        userProfile:userProfile,
        setUserProfile:setUserProfile,
        loginInstructor:loginInstructor,
        loginAdmin:loginAdmin,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}