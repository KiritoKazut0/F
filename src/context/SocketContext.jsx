import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const WebsocketContext = createContext();

export const WebsocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [dataSensors, setDataSensors] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
       
        

        const socketIo = io("https://h2biocontrolapi.integrador.xyz/", {
            auth: {
                token: token,  // Pasamos el token en la propiedad "auth"
              },

              extraHeaders: {
                'authorization': token
              }
        });

        socketIo.on("connect", () => {
            console.log("Conectado al servidor websocket");
        });

        socketIo.on("graphics", (data) => {
            console.log("Datos recibidos:", data);
            setDataSensors(data);
        });

        // socketIo.on("error", (error) => {
        //     console.log('error de conexion ')
        //     // console.error("Error:", error);
        // });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, []);

    const value = {
        dataSensors,
        setDataSensors,
    };

    return (
        <WebsocketContext.Provider value={value}>
            {children}
        </WebsocketContext.Provider>
    );
};
