import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function mailTo(body) {
    const promise = await axios.post(`${API_URL}/user/mailto`, body);
    return promise;
}

const MailServer = { mailTo };
export default MailServer;