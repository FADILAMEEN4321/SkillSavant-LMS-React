import {createContext,useState,useEffect,useContext} from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import {axiosInstance} from '../services/axios'
import { toast } from 'react-toastify';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [userProfile, setUserProfile] = useState(null);
    let [loading, setLoading] = useState(true)
    

    const loginUser = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axiosInstance.post('student-login/', {
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
        
        if(error.response){
          const errorMessage = error.response.data?.message;

          switch (errorMessage){
            case "Invalid credentials":
              toast.error('Invalid credentials');
              break;
            case "Please verify your account.":
              toast.error('Please verify your account.');
              break;
            case "Your account is blocked. Please contact support for assistance.":
              toast.error('Your account is blocked. Please contact support for assistance.');
              break;
            default:
              toast.error('Something went wrong.');
              break;    

          }
        }else{
          toast.error('Something went wrong.');
        }
          
         
        }
      };

      const loginInstructor = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axiosInstance.post('instructor-login/', {
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
            setUserProfile(data.instructor_data)
            console.log('inst-login',data.instructor_data)
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
          const response = await axiosInstance.post('admin-login/', {
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
        setUserProfile(null)
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

    useEffect(()=>{
      if(authTokens){
        setUser(jwt_decode(authTokens.access))
      }
      setLoading(false)

    },[authTokens,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}
