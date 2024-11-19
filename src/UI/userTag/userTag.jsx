import './userTag.css';
import { PiUserLight } from "react-icons/pi";
import { useEffect, useState } from 'react';

export default function UserTag() {
    const [data, setData] = useState();

    useEffect(() => {
        const name = localStorage.getItem('user');
        setData(name);
    }, [])

    return (
        <div className='UserTagClass'>
            <div className='userTag nS'><PiUserLight /></div>
            <p className='nS'>{data}</p>
        </div>
    );
}