import React from 'react';

// const myElement = <h1>React is {5+5} times better than JSX</h1>

const JsxDemo = () => {
    const userDetail = {
        firstName: "Mayur",
        lastName: "Pai",
        age: 25
    }

    const userDetails = [
        {
            firstName: "Mayur",
            lastName: "Pai",
            age: 25
        },
        {
            firstName: "Deekshith",
            lastName: "Shetty",
            age: 23
        },
        {
            firstName: "Akshatha",
            lastName: "Shetty",
            age: 23
        }
    ]


    const formatUserDetails = (users) => {
        return users.map(user => {
            return (
                <h1>This is {user.firstName} {user.lastName} and {user.age} year old</h1>
            )
        });
    }
    // const sum = 5+5;
    return (
        // <div>Hello! {formattedDetails(userDetail)}</div>
        <div>Hello! {formatUserDetails(userDetails)}</div>
    )

}

export default JsxDemo
