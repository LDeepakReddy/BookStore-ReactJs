import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

// function header(){
//     getToken =  'Bearer' + " " + localStorage.getItem('token')
//     return getToken;
// }

const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}

class AddressService {
    addAddress(data) {
       
        return axiosService.post(`${baseURL}/addAddress`,data, header)
    }


}
export default AddressService ;



