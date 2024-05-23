import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function signin(body) {
    const promise = axios.post(`${API_URL}/user/signin`, body);
    return promise;
}

async function signup(body) {
    const promise = await axios.post(`${API_URL}/user/signup`, body);
    return promise;
}

function getId(token){
    const auth = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    const promise = axios.get(`${API_URL}/user`, auth);
    return promise;
}

const AuthApi = { signin, signup, getId };
export default AuthApi;