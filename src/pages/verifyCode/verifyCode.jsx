import './verifyCode.css'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Decoration from '../../UI/decoration/decoration'
import IconBtn from '../../UI/IconBtn/iconBtn';
import TextLogo from '../../UI/textLogo/textLogo';
import Input from '../../UI/Input/Input';
import { useForm } from'react-hook-form';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
export default function VerifyCode() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { theme, toggleTheme } = useContext(ThemeCtx);

    const submitForm = (data) => {
        console.log(data);
    }

    const reenviarCodigo = () => {
        console.log('reenviado')
    }

    return (
        <div className={`VerifyCodeClass ${theme === 'dark' && 'darkVerifyCodeClass'}`}>
            <Decoration />
            <TextLogo />
            <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} customClass="themeCust" />
            <form onSubmit={handleSubmit(submitForm)}>
                <a href='/' style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white' }}>
                    <MdOutlineArrowBackIosNew /> Volver a login
                </a>
                <h2 style={{ margin: '10px 0' }}>Verificar Código</h2>
                <h5>Se ha enviado un código de autenticación a su correo electrónico.</h5>
                <Input register={register('pass', {required: 'Es necesario este campo'})} error={errors.pass} name="Código" />
                <p style={{fontSize: '13px', cursor: 'pointer'}} onClick={reenviarCodigo}>¿No recibiste tu código? <span style={{color: '#ffa332'}}>Reenviar</span></p>
                <button
                    className={`SendBtn ${theme === 'light' ? 'lightSendBtn' : 'darkSendBtn'}`}
                    type="submit"
                >
                    Verificar
                </button>
            </form>
        </div>
    );
}
