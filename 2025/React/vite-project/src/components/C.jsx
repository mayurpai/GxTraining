import { useContext } from 'react'
import MyContext from './MyContext';

const C = (props) => {
    const {value, setValue} = useContext(MyContext);
    return (
        <>
            {console.log(value)}
            <button onClick={() => setValue("frycshjcsavcahs kca")}>Change</button>
            <div>Component C Calling {value} </div>
        </>
    )
}

export default C
