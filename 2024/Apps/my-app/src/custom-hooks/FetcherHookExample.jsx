import React from 'react';
import useFetcher from './useFetcher';

const FetcherHookExample = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const response = useFetcher(baseURL)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 2000);
    }, [isLoading])

    return (
        <div>
            {isLoading ? <ul>
                <h1>Users</h1>
                {response.map((item) => (
                    <li key={item.id}>{item.name} </li>
                ))}
            </ul> : <h1>🧑🏻‍🍳 API In The Making...</h1>
            }
        </div>
    )
}

export default FetcherHookExample
