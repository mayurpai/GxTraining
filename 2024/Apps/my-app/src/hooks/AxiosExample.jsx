import axios from 'axios';
import { useEffect, useState } from "react";

const AxiosExample = () => {
    const [data, setData] = useState([]);

    async function getUser() {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response)
        setData(response.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h1>Axios</h1>
            <h4>Users</h4>
            <ul>
                {data?.map((item) => (
                    <li key={item.id}>{item.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosExample;
