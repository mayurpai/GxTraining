function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}


import React, { useState } from "react";

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => setIsLoggedIn(true);
    const handleLogoutClick = () => setIsLoggedIn(false);

    let button;
    isLoggedIn ? button = <LogoutButton onClick={handleLogoutClick} /> : button = <LoginButton onClick={handleLoginClick} />

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
};

export default LoginControl;
