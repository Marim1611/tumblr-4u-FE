import axios from 'axios';
export default () => {
    return axios.create({
        baseURL: "http://tumblr4u.eastus.cloudapp.azure.com:5000/"
    });
};