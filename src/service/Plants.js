import axios from "axios";
import { endPoint } from "../utils/tools";
import { decodeToken } from "../utils/tools";
export const getPlants = async () => {
    try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${endPoint}/plants/${decodeToken}`, {
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
