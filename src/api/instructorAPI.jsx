import {axiosInstance} from './../services/axios';


const deleteCourse = async (courseId) =>{
    try{
        const response = await axiosInstance.get(`unlist-course/${courseId}/`)
        return response
    }catch(error){
        throw error;
    }
}

const deleteModule = async (moduleId) =>{
    try{
        const response = await axiosInstance.delete(`module-delete/${moduleId}/`)
        return response
    }catch(error){
        throw error;
    }
}

export {
    deleteCourse,
    deleteModule
}