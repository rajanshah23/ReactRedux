import axios from "axios";


const api= axios.create({
    baseURL:'https://blog-server-t8o2.onrender.com/api/user/',
    headers:{
        'Accept':'application/json'
    }

})
export default api