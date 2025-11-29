import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react'
import axios from "axios";

const UseRefDemo = () => {
    const url = import.meta.env.VITE_URL
    const input = useRef()


    const handleFocus = () => {
        input.current.focus()
        input.current.value = "Hello World"
    }
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)


    async function fetchData_() {
        setLoading(true)
        let data = await axios.get(url)
        console.log(data)
        setUser(data.data)
        setTimeout(() => {
            setLoading(false)
            document.title = `User Count: ${data.data.length}`
        }, 3000);
    }

    useEffect(() => {
        console.log("Use Effect Called")
        // async function fetchData() {
        //     fetch('https://jsonplaceholder.typicode.com/todos')
        //         .then((response) => response.json())
        //         .then((json) => setUser(json))
        // }
        // fetchData()
        // async function fetchData_() {
        //     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        //     let response = await data.json()
        //     setUser(response)
        // }
        // fetchData_()

        fetchData_()
    }, [])


    async function postData() {
        setLoading(true)
        let data = await axios.post(url, {
            "employeeFirstName": "Modesta",
            "employeeMiddleName": "Addison",
            "employeeLastName": "Schiller-Doyle",
            "employeePhoneNumber": "(693) 965-3124 x2604",
            "employeeEmail": "Marjorie34@hotmail.com",
            "employeeCompanyName": "Gerlach, Anderson and Pouros",
            "employeeImage": "https://avatars.githubusercontent.com/u/51813665",
            "employeeGender": "female",
            "employeeTitle": "Human Factors Agent",
            "employeeCompanyLocation": "Research",
            "employeeSalary": "446.47",
            "employeeManager": "Rufus Braun",
            "employeeDepartment": "Beauty",
            "id": "15"
        },)
        console.log(data)
        await fetchData_()
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }


    const initialValue = 0
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return state + action.payload
            case 'decrement':
                return state - action.payload
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div>
            {/* {console.log(user)} */}
            <input type="text" ref={input} name="input" />
            {loading ? <div>Loading...</div> : user.map((user) => {
                return <div key={user.id}>{user.employeeTitle}</div>
            })}
            {state}
            <form onSubmit={handleSubmit}>
                <button onClick={handleFocus}>Focus Input</button>
                <button onClick={() => setUser(user + 1)}>Increment User</button>
                <button onClick={() => dispatch({ type: "increment", payload: 5 })}>Increment State</button>
                <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>Decrement State</button>
                <button onClick={() => postData()}>Post</button>
                <input type="text" name="firstName" placeholder='First Name' onChange={(e) => console.log(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UseRefDemo
