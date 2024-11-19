import './sensorData.css'
import { BsGraphDownArrow, BsGraphUpArrow  } from "react-icons/bs";

export default function SensorData({ legend, tendence, value, background, sub }) {
    return (
        <div style={{ background: `${background}88` }} className='SensorDataClass'>
            <p className='legend'>{legend}</p>
            <div className='valuesTend'>
                <div className='values'>
                    <p>{value}<span style={{ fontSize: '15px' }}>{sub}</span></p>
                </div>
                <p className='tendence'>
                    {tendence}%
                    { tendence <= 0 ? <BsGraphDownArrow style={{margin: '0 10px'}} />
                    : <BsGraphUpArrow style={{margin: '0 10px'}} /> }
                </p>
            </div>
        </div>
    )
}

