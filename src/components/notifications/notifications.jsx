import React, { useState, useEffect, useContext } from 'react';
import './notifications.css';
import Notification from '../../UI/notif/notif';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { PiWifiSlashLight } from "react-icons/pi";

export default function Notifications() {
    const { theme } = useContext(ThemeCtx);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
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
            <h5 className='nS'>Alertas</h5>
            <div className='Notifications'>
                {isOffline && (
                    <Notification
                        message="Error de conexión"
                        icon={<PiWifiSlashLight />}
                    />
                )}
            </div>
        </div>
    );
}
