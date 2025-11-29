import React, { useState } from "react";

const StudentComponent = () => {
    const [student, setStudent] = useState({
        firstName: "Mayur",
        lastName: "Pai",
        rollNo: 123,
        age: 24,
        books: ["C Programming", "C++ Programming", "Data Structure and Algorithms"],
    });

    const updateStudent = () => {
        setStudent({
            ...student,
            rollNo: 321,
            age: 23,
        });
    };

    return (
        <div>
            <h1>Student Details</h1>
            <hr />
            <h3>First Name: {student.firstName}</h3>
            <h3>Last Name: {student.lastName}</h3>
            <h3>Roll No: {student.rollNo}</h3>
            <h3>Age: {student.age}</h3>
            <h3>
                Books:{" "}
                {student.books.map((book, index) => (
                    <span key={index}>{book}{index < student.books.length - 1 ? ", " : ""}</span>
                ))}
            </h3>
            <button type="button" onClick={updateStudent}>
                Update Student Details
            </button>
        </div>
    );
};

export default StudentComponent;
