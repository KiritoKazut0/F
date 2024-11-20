import './dashboard.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRandomColor } from '../../utils/tools';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import LateralMenu from '../../components/lateralMenu/lateralMenu';
import Header from '../../components/header/header';
import Notifications from '../../components/notifications/notifications';
import SensorData from '../../UI/sensorData/sensorData';
import Chart from '../../components/chart/chart';
import { WebsocketContext } from '../../context/SocketContext';
import { getStadistica } from '../../service/statistics';

export default function Dashboard() {
    const { dataSensors } = useContext(WebsocketContext)
    const [hidrogen, setHidrogen] = useState([])
    const [ph, setPh] = useState([])
    const [oxygen, setOxygen] = useState([])
    const [temp, setTemp] = useState([])
    const { theme } = useContext(ThemeCtx);

    const { register, watch } = useForm({
        defaultValues: {
            predictionTimeframe: '1' // default to Hour
        }
    });

    const selectedTimeframe = watch('predictionTimeframe');

    // Log the selected timeframe whenever it changes
    useEffect(() => {
        const timeframe = parseInt(selectedTimeframe);
        switch (timeframe) {

            case 1:
                break;

            case 2:

            console.log('Selected Timeframe:', selectedTimeframe);

                const getCurrentDayDateRange = () => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); 
                    const startDate = today.toISOString();

                    today.setHours(23, 59, 59, 999);
                    const endDate = today.toISOString();

                    return { startDate, endDate };
                };

            const {endDate, startDate} = getCurrentDayDateRange();

                getStadistica({
                    typeSensors: ['temperature', 'ph', 'oxigen', 'hydrogen'],
                    endDate,
                    startDate,
                    typeFilter: "days"
                });

                break;

            case 3:
                break;

        }


    }, [selectedTimeframe]);

    useEffect(() => {
        document.title = "Dashboard";
    
        // Crear copias de los datos previos y agregar los nuevos valores
        const newHidrogen = [...hidrogen, dataSensors?.hidrogen].slice(-4);
        const newPh = [...ph, dataSensors?.ph].slice(-4);
        const newOxygen = [...oxygen, dataSensors?.oxygen].slice(-4);
        const newTemp = [...temp, dataSensors?.temperature].slice(-4);
    
        // Actualizar los estados con los nuevos valores
        setHidrogen(newHidrogen);
        setPh(newPh);
        setOxygen(newOxygen);
        setTemp(newTemp);
    
        console.log(newHidrogen);  // Esto mostrará el nuevo estado
    }, [dataSensors]);
    

    return (
        <div className={`DashBoardClass`}>
            <LateralMenu />
            <div className='container'>
                <Header />
                <div className='SensorDatas'>
                    <p style={{ width: '95%', margin: '10px 0', fontSize: '14px' }}>Estadísticas</p>
                    <SensorData background={getRandomColor()} legend="Hidrogeno" value={dataSensors.hidrogen} sub='H2' tendence={2.01} />
                    <SensorData background={getRandomColor()} legend="PH" value={dataSensors.ph} sub="pH" tendence={7.2} />
                    <SensorData background={getRandomColor()} legend="Oxígeno" value={dataSensors.oxygen} sub='mg/L' tendence={10.07} />
                    <SensorData background={getRandomColor()} legend="Temperatura" value={dataSensors.temperature} sub='°C' tendence={2.01} />
                </div>
                <div className='ChartClass realTime'>
                    <p style={{ margin: '10px 15px' }}>Datos de producción y monitoreo en tiempo real</p>
                    <Chart
                        title='Tiempo Real'
                        timeRange={["Min 1", "Min 2", "Min 3", "Min 4", "Min 5"]}
                        categories={["Hidrogeno", "PH", "Oxígeno", "Temperatura"]}
                        data={[
                            [0, 0, hidrogen[0]], [0, 1, hidrogen[1]], [0, 2, hidrogen[2]], [0, 3, hidrogen[3]],
                            [1, 0, temp[0]], [1, 1, temp[1]], [1, 2, temp[2]], [1, 3, temp[3]],
                            [2, 0, ph[0]], [2, 1, ph[1]], [2, 2, ph[2]], [2, 3, ph[3]],
                            [3, 0, oxygen[0]], [3, 1, oxygen[1]], [3, 2, oxygen[2]], [3, 3, oxygen[3]],
                        ]} />
                </div>
                <div className='ChartClass'>
                    <div className='PredictionsClass'>
                        <p>Prediciones por</p>
                        <select
                            {...register('predictionTimeframe')}
                            style={{ color: theme === "dark" && "white" }}
                        >
                            <option style={{ color: theme === "dark" && "black" }} value='1'>Hora</option>
                            <option style={{ color: theme === "dark" && "black" }} value='2'>Día</option>
                            <option style={{ color: theme === "dark" && "black" }} value='3'>Semana</option>
                            <option style={{ color: theme === "dark" && "black" }} value='4'>Mes</option>
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