import axios from "axios"; // npm install --save axios

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 382a7987d419b166da1f09c07e61495a49085101896a8292906c8991919fdff5'
    }
});
