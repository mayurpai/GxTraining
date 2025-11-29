import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    // const [employee, setEmployee] = useState([])
    // const input = useRef()
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(`Actual Value: ${count}`)

        // return () => {
        //     console.log(`Previous Value: ${count}`)
        // }
    }, [count])

    // 1. Empty Dependency Array [] -> Runs Once On Page Load
    // 2. No Dep Array -> Runs On Every Render But Depends On Whatever States Are Used In The Component (If One State Changes, It Re-Renders)
    // 3. With Dep Array [state1, ...] -> Runs On Change Of That Specific State Mentioned In The Dep Array


    // async function fetchData() {
    //     setLoading(true)
    //     let response = await axios.get("https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee")
    //     // let data = await response.json()
    //     setEmployee(response.data)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 300);
    //     console.log(response.data)
    // }
    // async function fetchData() {
    //         let response = await fetch("https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee")
    //         let data = await response.json()
    //         console.log(data)
    //     }

    // useEffect(() => {
    // console.log("UseEffect called")
    // async function fetchData() {
    //     let response = fetch("https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee").then((response) => response.json())
    //         .then((json) => console.log(json))
    // }
    // fetchData()

    // fetchData()
    // document.title = `You clicked ${count} times`
    // }, [])


    async function postEmployee() {
        let response = await axios.put("https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/29",
            {
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
                "employeeSalary": "646.47",
                "employeeManager": "Rufus Braun",
                "employeeDepartment": "Beauty",
                "id": "29"
            },
        )
        // let data = await response.json()
        console.log(response)
        fetchData()
    }
    return (
        <div>
            {/* <h1>Employees</h1>
        {loading ? <p>Loading...</p> : employee.map((emp) => {
            return <div key={emp.id}>{emp.id} - {emp.employeeFirstName}</div>
        })} */}
            {/* <button onClick={postEmployee}>Add Employee</button> */}
            <h1>Count: {count}</h1>
            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>
            {/* <input type="text" ref={input} /> */}

            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
            {/* <button onClick={() => input.current.value = "Hey!"}>Ref Change</button> */}
        </div>
    )
}

export default UseEffect
