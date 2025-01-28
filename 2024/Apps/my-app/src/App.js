import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import useAxios from "./custom-hooks/UseAxios";
import { decrement, increment, reset } from './redux/counter/counterActions';
import { countSelector } from './redux/counter/countSelector';
import MyComponent from './components/MyComponent';

const App = () => {
    const { data: getData, loading: getLoading, error: getError, execute: getPosts } = useAxios(
        'http://localhost:8080/zipcode/90210',
        { method: 'GET' }
    );
    useEffect(() => {
        getPosts()
    }, [])

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
            <button onClick={() => Swal.fire({
                position: "center",
                icon: "success",
                title: "Done",
                timer: 1000,
            })}>Success!</button>
            <button onClick={() => Swal.fire({
                title: "Are You Sure You Wanna Delete?",
                showDenyButton: true,
                confirmButtonText: "Yuppppppppppp! 😈",
                denyButtonText: `Helllllllllllll Nahhhhhhhhhhhhh ❌`
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    Swal.fire("Deleted! ☠️", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Thankkkkkk Godddddddd, Everything's Foineeeeeeeeeeee 😥", "", "info");
                }
            })}>Delete</button>
            <MyComponent></MyComponent>
        </>
    )
};

export default App;
