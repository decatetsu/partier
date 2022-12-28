import axios from "axios";
import {useEffect, useState} from "react";

export function App() {
    const [activities, setActivities] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(r => setActivities(r.data));
    }, []);

    return (
        <ul className={'list-decimal'}>
            {activities.map((activity) => <li key={activity.id}>{activity.title}</li>)}
        </ul>
    );
}
