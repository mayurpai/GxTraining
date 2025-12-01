import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import "./App.css";
import { decrementByPayload, decrementMyValue, decrementValue, imv, incrementValue } from "./app/features/counter/counterSlice";

const Home = () => {
    return (
        <div>This Is My Home Comp</div>
    )
}
const About = () => {
    return (
        <div>This Is My About Comp</div>
    )
}
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>This Is My Contact Comp


            <button onClick={() => navigate("/profile", { state: { message: "I Am Coming From Contact Page" } })}>Navigate To Profile Page</button>

        </div>
    )
}
const Profile = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>This Is My Profile Comp

            <h1>{location?.state?.message}</h1>
        </div>
    )
}

import { FaBeer } from 'react-icons/fa';
import { FaAdn } from "react-icons/fa6";

const App = () => {
    const counter = useSelector((state) => state.counter);
    console.log(counter);
    const dispatch = useDispatch();
    const label = window.labelConfig
    // console.log(label)
    return (
        <>
            <FaBeer />
            <FaAdn />
            <h1>The Counter Value Is {counter.value}</h1>
            <h1>The My Counter Value Is {counter.myValue}</h1>
            <button onClick={() => dispatch(incrementValue())}>Increment Value</button>
            <button onClick={() => dispatch(decrementValue())}>Decrement Value</button>
            <button onClick={() => dispatch(imv())}>Increment My Value</button>
            <button onClick={() => dispatch(decrementMyValue())}>Decrement My Value</button>
            <button onClick={() => dispatch(decrementByPayload(10))}>Decrement By 10</button>
            <h1>{label?.dashboard?.greeting.replace("{name}", "User")}</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
