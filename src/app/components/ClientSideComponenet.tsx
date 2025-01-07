import { useEffect, useState } from "react";

const ClientSideComponent = () => {
    const [clientTime, setClientTime] = useState("");

    useEffect(() => {
        setClientTime(new Date().toLocaleString()); // Only runs on client
    }, []);

    return <p>Current Time (Client-Side): {clientTime}</p>;
};

export default ClientSideComponent;
