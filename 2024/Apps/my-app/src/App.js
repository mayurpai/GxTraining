import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/counter/counterActions';
import { countSelector } from './redux/counter/countSelector';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(countSelector)
    const [countPayload, setCountPayload] = useState()
    return (
        <>
            <h1>Counter: {count}</h1>
            <input type='number' onChange={(event) => setCountPayload(event.target.value)} />
            <button onClick={() => dispatch(increment(countPayload))}>Increment</button>
            <button onClick={() => dispatch(decrement(countPayload))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
};

export default App;
