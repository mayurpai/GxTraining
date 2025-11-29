// MyProvider.js
import { useState } from 'react';
import MyContext from './MyContext';
function MyProvider(props) {
    const [value, setValue] = useState('Hello from Context!');
    return (
        <MyContext.Provider value={{ value, setValue }}>
            {props.children}
        </MyContext.Provider>
    );
}
export default MyProvider;
