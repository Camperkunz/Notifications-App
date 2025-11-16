export default function Notification({ id, name, message, onClear }) {
    return (
        <div className="notification">
            <div className="notification-left">
                <div className="notification-name">{name}</div>
                <div className="notification-message">{message}</div>
            </div>

            <div className="notification-right">
                <button className="btn btn-clear" onClick={() => onClear(id)}>Clear</button>
            </div>
        </div>
    );
}