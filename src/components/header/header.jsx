import './header.css';
import { useContext } from 'react';
import IconBtn from '../../UI/iconBtn/iconBtn';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { ThemeCtx } from '../../utils/ThemeCtx';
export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    return (
        <div className={`HeaderClass ${theme === 'dark' && 'HeaderClassDark'}`}>
            <IconBtn customClass="LightNightBtn" onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} />
        </div>
    );
}