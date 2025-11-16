import { useState } from "react";
import data from "./notifications";
import Notification from "./components/Notification";
import Layout from "./components/Layout";

function App() {
    const [notifications, setNotifications] = useState(data);

    const clearNotification = (id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    return (
        <Layout>
            <div className="top-bar">
                <h2 className="title">Notifications</h2>
                <div className="count">You have <span className="badge">{notifications.length}</span> notifications</div>
            </div>

            <div className="controls">
                {notifications.length > 0 ? (
                    <button className="btn btn-clear-all" onClick={clearAll}>Clear All Notifications</button>
                ) : (
                    <div className="empty">No new notifications</div>
                )}
            </div>

            <div className="list">
                {notifications.map((n) => (
                    <Notification
                        key={n.id}
                        id={n.id}
                        name={n.name}
                        message={n.message}
                        onClear={clearNotification}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default App;