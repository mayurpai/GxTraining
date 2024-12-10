import React from 'react'
import axios from 'axios'

const useFetcher = (baseURL) => {
    const [data, setData] = React.useState([]);
    async function getUser() {
        let response = await axios.get(baseURL)
        console.log(response)
        setData(response.data);
    }

    React.useEffect(() => {
        getUser();
    }, []);

    return data
}

export default useFetcher
