import TextLogo from '../../UI/textLogo/textLogo';
import React from 'react';
import IconBtn from '../../UI/IconBtn/iconBtn';
import Input from '../../UI/Input/Input';
import Decoration from '../../UI/decoration/decoration';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import './newPassword.css';

export default function NewPassword() {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitForm = (data) => {
        console.log(data);
    };
    const password = watch('pass');
    const passwordConfirm = watch('passComf');
    return (
        <div className={`NewPasswordClass ${theme === 'white' ? 'whitePass' : 'darkPass'}`}>
            <Decoration />
            <TextLogo />
            <IconBtn customClass='themeCust' onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} />
            <form onSubmit={handleSubmit(submitForm)} className='newPassForm'>
                <a href='/' style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white' }}>
                    <MdOutlineArrowBackIosNew /> Volver a login
                </a>
                <h2 style={{ margin: '10px 0' }}>Establecer una contraseña</h2>
                <h5>Su contraseña anterior ha sido restablecida. Establezca una nueva contraseña para su cuenta.</h5>
                <Input
                    register={register('pass', { required: 'Es necesario este campo' })}
                    error={errors.pass}
                    name="Contraseña"
                    type="password"
                />
                <Input
                    register={register('passComf', { required: 'Es necesario este campo' })}
                    error={errors.passComf}
                    name="Reingresar contraseña"
                    type="password"
                />
                {password && passwordConfirm && password !== passwordConfirm && (
                    <p style={{ color: 'red', marginTop: '10px' }}>Las contraseñas no coinciden</p>
                )}
                <button
                    className={`SendBtn ${theme === 'light' ? 'lightSendBtn' : 'darkSendBtn'}`}
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
