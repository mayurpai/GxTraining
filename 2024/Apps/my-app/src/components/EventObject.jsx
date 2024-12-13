import React from 'react'

const EventObject = () => {
    const handleClick = (e) => {
        // Logs Synthetic Base Event
        console.log(e)
    }

    return (
        <div>
            <h1>Event Object</h1>
            {/* Event In Built */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <button onClick={handleClick}>Event 1</button>
                {/* Undefined */}
                <button onClick={() => handleClick()}>Event 2</button>
                {/* Explicitly Specify Events */}
                <button onClick={(e) => handleClick(e)}>Event 3</button>
                <button onClick={(e) => console.log(e)}>Event 4</button>
                <button onMouseEnter={() => console.log("Heyyyyy! 🤩")} onMouseLeave={() => console.log("Leaving Me? 🥹")}>Hover Me!</button>
            </div>
        </div>
    )
}

export default EventObject
