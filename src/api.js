import axios from 'axios';

const API_KEY = '751fc1a4e6a7497f8ef9ef983284dc91';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, page) => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                category: category,
                page: page,
                pageSize: 10,
                apiKey: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
