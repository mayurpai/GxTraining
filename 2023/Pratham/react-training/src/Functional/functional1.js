import React, { useState } from 'react'
import ChildFunctional from './ChildFunctional';

function Functional1(props) {

    let age = 20;

    const [value, setValue] = useState(0)
    const [array, setArray] = useState({
        name : "Mayur",
        age : 10,
    })

    const updateValue = () =>{
        
        age = 30;
        console.log(age);
        setValue(value+1)
        console.log(array);
        const updatedArray = array;
        array.address = "Banglore";
        setArray(updatedArray);
        console.log(array);
    }

    return (
        <div>
            <div>{props.name}</div>
            <div>{age}</div>
            <div>{array.address}</div>
            <div>{value}</div>
            <button onClick={updateValue}>Click</button>
            <ChildFunctional value = {value} object = {array} updateValue = {updateValue} />
        </div>
    )
}

export default Functional1