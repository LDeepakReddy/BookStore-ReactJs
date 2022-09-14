import AxiosService from "./AxiosService";



const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers : {
        Authorization : 'Bearer' + " " + localStorage.getItem('token')
    }
}
// function header() {
//     return localStorage.getItem("token")
// }


class BookService {
    getAllBooks() {
        // const headers = header();
        return axiosService.get(`${baseURL}/displayAllBooks`, header)
    }
}
export default BookService;