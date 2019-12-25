import axios from 'axios';

let LoginInfo = JSON.parse(localStorage.getItem('LoginInfo'))
let token = LoginInfo ? LoginInfo.token : ''

const AxiosConfig = axios.create({
    baseURL: 'https://localhost:44336/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
    },
    timeout: 5000
})

export default AxiosConfig