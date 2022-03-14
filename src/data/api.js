import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/upload/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'single', data, options);
    } catch (error) {
        throw error;
    }
}
