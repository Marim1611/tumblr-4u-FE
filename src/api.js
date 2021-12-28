import axios from 'axios';
//http://tumblr4u.eastus.cloudapp.azure.com:5000/
export default () => {
    return axios.create({
        baseURL: "http://localhost:5000/"
    });
};