import React from "react";

function UserGreeting(props) {
  return <h1>Welcome Back!!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please Sign in!!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Log in</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Log out</button>;
}

class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleLoginClick() {
    this.setState ({
      isLoggedIn: true,
    });
    console.log(this.state.isLoggedIn);
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    });
    console.log(this.state.isLoggedIn);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = (
        <LogoutButton onClick={() => this.handleLogoutClick()}></LogoutButton>
      );
    } else {
      button = (
        <LoginButton onClick={() => this.handleLoginClick()}></LoginButton>
      );
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {button}
      </div>
    );
  }
}

export default LoginController;
