import './decoration.css';
import algas from '../../images/algas.png';

export default function Decoration() {
    return (
        <div className='Decoration'>
            <p className='nS'>H2<span style={{color: "#ff7139"}}>BIO</span>CONTROL</p>
            <img className='alga2 nS' src={algas}></img>
            <img className='alga1 nS' src={algas}></img>
        </div>
    )
}