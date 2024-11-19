import './dashboard.css';
import { useEffect } from 'react';
import { getRandomColor } from '../../utils/tools';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import LateralMenu from '../../components/lateralMenu/lateralMenu';
import Header from '../../components/header/header';
import Notifications from '../../components/notifications/notifications';
import SensorData from '../../UI/sensorData/sensorData';
import Chart from '../../components/chart/chart';

export default function Dashboard() {
    const { theme } = useContext(ThemeCtx);
    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className={`DashBoardClass`}>
            <LateralMenu />
            <div className='container'>
                <Header />
                <div className='SensorDatas'>
                    <p style={{ width: '95%', margin: '10px 0', fontSize: '14px' }}>Estadísticas</p>
                    <SensorData background={getRandomColor()} legend="Hidrogeno" value={10} sub='H2' tendence={2.01} />
                    <SensorData background={getRandomColor()} legend="PH" value={7} sub="pH" tendence={-22.03} />
                    <SensorData background={getRandomColor()} legend="Oxígeno" value={42} sub='mg/L' tendence={10.07} />
                    <SensorData background={getRandomColor()} legend="Temperatura" value={26.3} sub='°C' tendence={2.01} />
                </div>
                <div className='ChartClass realTime'>
                    <p style={{ margin: '10px 15px' }}>Datos de producción y monitoreo en tiempo real</p>
                    <Chart
                        title='Tiempo Real'
                        timeRange={["Min 1", "Min 2", "Min 3", "Min 4", "Min 5"]}
                        categories={["Hidrogeno", "PH", "Oxígeno", "Temperatura"]}
                        data={[
                            [0, 0, 100], [0, 1, 0], [0, 2, 1], [0, 3, 20],
                            [1, 0, 1000], [1, 1, 500], [1, 2, 3000], [1, 3, 10],
                            [2, 0, 10], [2, 1, 9], [2, 2, 8], [2, 3, 10],
                            [3, 0, 10], [3, 1, 5], [3, 2, 3], [3, 3, 10],
                        ]} />
                </div>
                <div className='ChartClass'>
                    <div className='PredictionsClass'>
                        <p>Prediciones por</p>
                        <select style={{color: theme === "dark" && "white"}}>
                            <option style={{color: theme === "dark" && "black"}} value='1'>Hora</option>
                            <option style={{color: theme === "dark" && "black"}} value='2'>Día</option>
                            <option style={{color: theme === "dark" && "black"}} value='3'>Semana</option>
                            <option style={{color: theme === "dark" && "black"}} value='4'>Mes</option>
                        </select>
                    </div>
                    <Chart
                        timeRange={["Min 1", "Min 2", "Min 3", "Min 4", "Min 5"]}
                        categories={["Hidrogeno", "PH", "Oxígeno", "Temperatura"]}
                        data={[
                            [0, 0, 100], [0, 1, 0], [0, 2, 1], [0, 3, 20],
                            [1, 0, 1000], [1, 1, 500], [1, 2, 3000], [1, 3, 10],
                            [2, 0, 10], [2, 1, 9], [2, 2, 8], [2, 3, 10],
                            [3, 0, 10], [3, 1, 5], [3, 2, 3], [3, 3, 10],
                        ]} />
                </div>
            </div>
            <Notifications />
        </div>
    );
}
