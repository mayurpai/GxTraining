import { useContext } from 'react'
import B from './B'
import MyContext from './MyContext';

const A = (props) => {
    const anyName = useContext(MyContext);
    return (
        <>
            {console.log(anyName)}
            <div>Component A Calling {props.name} <B name={props.name}></B></div>
        </>
    )
}

export default A
