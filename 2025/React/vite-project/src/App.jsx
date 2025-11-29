import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';


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


const App = () => {
    const label = window.labelConfig
    console.log(label)
    return (
        <>
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
