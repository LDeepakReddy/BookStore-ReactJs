import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers: {
        token: localStorage.getItem("token")
    }
}

class UserService {
    Signup(data) {
        return axiosService.post(`${baseURL}/register`, data);
    }

    Login(data) {
        return axiosService.post(`${baseURL}/login`, data)
    }

    forgotPassword(data) {
        return axiosService.post(`${baseURL}/forgotPassword`, data)
    }

    ResetPassword(data) {
        return axiosService.put(`${baseURL}/resetPassword`, data, header)
    }

}

export default UserService;