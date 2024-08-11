import axios from 'axios';

// custom base endpoint
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// custom GET res.data.data
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

// Custom POST
// Custom PUT
// ...

export default request;
