import React, { useState } from 'react'

const Student = () => {
    // const a = 10
    const [theme, setTheme] = useState(false)
    const [count, setCount] = useState(0)
    // const [initialValue, functionToChangeTheValue] = useState()
    // const [theme_] = useState(false)
    // const theme__ = false

    // const handleTheme = () => {
    //     setTheme((i) => !i)
    // }

    const incrementCount = () => {
        setCount((count) => count + 1)
    }
    const decrementCount = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    const [companies, setCompanies] = useState(["Google", "Facebook", "Amazon"])
    const handleCompanies = () => {
        setCompanies(() => [...companies, "Netflix"])
    }

    const removeCompany = (companyToRemove) => {
        setCompanies(companies.filter((comp) => comp !== companyToRemove))
    }
    return (
        <>
            <h1>Compaines</h1>
            {companies.join(", ")}
            {companies.map((company, index) => {
                return <div key={index}>
                    {`${index + 1} - ${company}`}

                    <button onClick={() => removeCompany(company)}>Remove</button>


                </div>
            })}
            <h1>The Count Is {count}</h1>
            <button onClick={incrementCount}>Incrementer</button>
            <button onClick={decrementCount}>Decrementer</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleCompanies}>Add Company</button>
            <button onClick={() => removeCompany("Google")}>Remove Company</button>
            
            {/* {console.log(theme, theme_, theme__)} */}
            {/* <button onClick={() => setTheme(!theme)}>Toggle Theme</button> */}
            {/* <button onClick={handleTheme}>Toggle Theme</button>
            <div>The State Of The Theme Is {theme.toString()}</div> */}
        </>
    )
}

export default Student
