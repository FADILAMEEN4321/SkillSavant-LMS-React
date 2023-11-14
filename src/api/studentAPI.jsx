import { axiosInstance } from '../services/axios';
 

const addToFavourites = async (studentId, courseId) =>{
    try{
        const response = await axiosInstance.post('add_favourite_course/',{
            student: studentId,
            course : courseId
        })
        return response;

    }catch(error){
        throw error;    
    }
}


const removeFavourites = async (studentId, courseId) =>{
    try{
        const response = await axiosInstance.delete(`remove_favourite_course/${studentId}/${courseId}/`)
        return response

    }catch(error){
        throw error;
    }
}





export {addToFavourites, 
        removeFavourites};