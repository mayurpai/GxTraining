import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/counter/counterActions';
import { countSelector } from './redux/counter/countSelector';

const App = () => {
    const labelConfig = window.labelConfig;
    const dispatch = useDispatch();
    const count = useSelector(countSelector)
    const [countPayload, setCountPayload] = useState()
    return (
        <>
            <h1>{labelConfig.dashboard.greeting.replace("{name}", "Mayur")}</h1>
            <h1>{labelConfig.count.title}: {count}</h1>
            <input type='number' onChange={(event) => setCountPayload(event.target.value)} />
            <button onClick={() => dispatch(increment(countPayload))}>Increment</button>
            <button onClick={() => dispatch(decrement(countPayload))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
};

export default App;
