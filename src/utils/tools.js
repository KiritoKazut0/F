import { jwtDecode } from "jwt-decode"
export const endPoint = "https://h2biocontrolapi.integrador.xyz/api"

export const decodeToken = () => {
    const token = localStorage.getItem('token');
    if(!token) 
        return null;
    const tokenDecode = jwtDecode(token)
    return tokenDecode;
}

export const getRandomColor = () => {
    const r = Math.floor((Math.random() * 128) + 127);
    const g = Math.floor((Math.random() * 128) + 127); 
    const b = Math.floor((Math.random() * 128) + 127); 
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
