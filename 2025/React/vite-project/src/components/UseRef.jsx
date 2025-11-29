import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef()
    // const [] = useState()

    const handleRef = () => {
        ref.current.focus();
        console.log(ref.current.value)
        ref.current.value = "Hello World"
        console.log(ref.current.value)
    }
    return (
        <div>
            <input type="text" name="firstName" ref={ref} />
            <button onClick={handleRef}>Click</button>

        </div>
    )
}

export default UseRef
