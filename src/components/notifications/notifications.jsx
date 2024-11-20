import React, { useState, useEffect, useContext } from 'react';
import './notifications.css';
import Notification from '../../UI/notif/notif';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { PiWifiSlashLight } from "react-icons/pi";
import EllipsisList from '../../UI/ellipsisList/ellipsisList';
import { AlertError } from '../../UI/Alerts/Alerts';

export default function Notifications() {
    const { theme } = useContext(ThemeCtx);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [dataUser, setDataUsers] = useState([]);
    const [dataPlants, setDataPlants] = useState([]);
    useEffect(() => {
        const handleOffline = () => {
            setIsOffline(true);
        };
        const handleOnline = () => {
            setIsOffline(false);
        };
        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);
        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);




    return (
        <div className={`notificationsClass ${theme === 'light' ? 'notLight' : 'notNight'}`}>
            <div className='plants-registers'>
                <h5> Registro de algas </h5>

                <EllipsisList
                    name={'Alga Nori'}
                    type={'Marina'}
                    urlImg={'https://static.vecteezy.com/system/resources/previews/014/505/568/non_2x/seaweed-icon-cartoon-style-vector.jpg'}
                />

                <EllipsisList
                    name={'Alga Wakame'}
                    type={'Marina'}
                    urlImg={'https://static.vecteezy.com/system/resources/previews/014/505/568/non_2x/seaweed-icon-cartoon-style-vector.jpg'}

                />

                <EllipsisList
                    name={'Alga Espirulina'}
                    type={'Dulceacuícola'}
                    urlImg={'https://static.vecteezy.com/system/resources/previews/014/505/568/non_2x/seaweed-icon-cartoon-style-vector.jpg'}

                />

            </div>

            <div className='Alerts'>
                <h5 > Alertas </h5>
                <AlertError />
                <AlertError />
                <AlertError />
            </div>

            <div className='list-users'>
                <h5 > Usuarios </h5>
                <EllipsisList
                    name={'Esdrass'}
                    type={'Administrador'}
                    urlImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUJ9cYfbS6CT-dig6V_cDsT3x_Zx-izVqAg&s'}
                />

                <EllipsisList
                    name={'Martha'}
                    type={'Moderadora'}
                    urlImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUJ9cYfbS6CT-dig6V_cDsT3x_Zx-izVqAg&s'}
                />

                <EllipsisList
                    name={'Carlos'}
                    type={'Usuario'}
                    urlImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUJ9cYfbS6CT-dig6V_cDsT3x_Zx-izVqAg&s'}
                />


            </div>

        </div>
    );
}

