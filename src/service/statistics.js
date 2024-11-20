import axios from "axios";
import { endPoint } from "../utils/tools";


export const getStadistica = async ({typeSensors, endDate, startDate, typeFilter}) => {
    try {
        const ResponseData = [];
        const token = localStorage.getItem('token');
        const idPlant = "673e221967bc7cfdf8c31983";
        
        
        for (let index = 0; index < typeFilter.length; index++) {
            console.log({
                typeSensors: typeSensors[index], endDate, startDate, typeFilter
            });
            const response = await axios.get(`${endPoint}/statistics`, {
                idPlant,
                startDate,
                endDate,
                typePredictions: typeFilter,
                typeSensor: typeSensors[index]
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            ResponseData.push(response.data);

            
        }
        

        console.log(ResponseData);

        return ResponseData;

        
        

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};




