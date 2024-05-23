import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function mailTo(body) {
    const promise = axios.post(`${API_URL}/user/mailto`, body);
    return promise;
}

const MailServer = { mailTo };
export default MailServer;