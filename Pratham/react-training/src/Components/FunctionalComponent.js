import React, { useState } from 'react'
import NewFunction from './NewFunctional'

function FunctionalComponent() {

    const [name, setName] = useState(0)
    const [myObject, setMyObject] = useState({
        key1: 'value1',
        key2: 'value2',
      })
    const [array, setArray] = useState([]);
    const updateValue = () => {
        setName(name+1)
        const updatedObject = {
            ...myObject,
            key1: 'new value1',
            key2: 'new value2',
            key3: 'new value3',
            key4: 'new value4'
          };
          setMyObject(updatedObject);
          console.log(myObject)
          setArray([1,2,3]);
          console.log(array);
    }
    return (
        <div>
            <div>{name}</div>
            <button onClick={updateValue}>Click</button>

            <NewFunction name={name}
            updateValue = {updateValue}
            /> 
        </div>
    )
}

export default FunctionalComponent