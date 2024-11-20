import axios from "axios";
import { endPoint } from "../utils/tools";

export const getUsers = async () => {
    try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${endPoint}/users`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
