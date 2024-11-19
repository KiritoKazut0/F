import './notif.css';

export default function Notification({message, icon}) {
    return (
        <div className="notifClass nS">
            <p>{message}</p>
            <h2>{icon}</h2>
        </div>
    );
}