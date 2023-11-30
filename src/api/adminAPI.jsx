import {axiosInstance} from './../services/axios';

const fetchSales = async() =>{
    try{
        const response = await axiosInstance.get('admin/sales/');
        return response;

    }catch(error){
        console.log('Error fetching sales:', error);
        throw error;

    }
};

export {fetchSales};