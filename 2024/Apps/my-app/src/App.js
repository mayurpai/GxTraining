import React from 'react';
import { HelloWorld } from './components/HelloWorld';
import ImageContainer from './components/ImageContainer';
import InlineStyledComponent from './components/InlineStyledComponent';
import JsxDemo from './components/JsxDemo';
import { StyledWithCSS } from './components/StyledWithCSS';
import Gx from "./images/galaxe_solutions_cover.jpg";
import styles from './styles/StyledWithModule.module.css';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Greeting from './components/Greeting';
import StudentComponent from './components/StudentComponent';
import LoginControl from './components/ConditionalRendering';
import UseStateHook from './hooks/UseStateHook';
import UseEffectHook from './hooks/UseEffectHook';
import UseRefHook from './hooks/UseRefHook';
import UseReducerHook from './hooks/UseReducerHook';
import UseContextHook from './hooks/UseContextHook';
import AxiosExample from './hooks/AxiosExample';
import { CounterHookExample } from './custom-hooks/CounterHookExample';
import FetcherHookExample from './custom-hooks/FetcherHookExample';
import EventObject from './components/EventObject';
import MyProvider from './components/MyProvider';
import MyConsumer from './components/MyConsumer';


const App = () => {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    }

    const items = [
        {
            "name": "A",
            "id": "1",
            "phone": "1234891212",
        },
        {
            "name": "B",
            "id": "2",
            "phone": "1234891212",
        },
        {
            "name": "C",
            "id": "3",
            "phone": "1234891212",
        },
        {
            "name": "D",
            "id": "4",
            "phone": "1234891212",
        },
    ]

    return (
        <>
            {/* <HelloWorld /> */}
            {/* <InlineStyledComponent /> */}
            {/* <StyledWithCSS /> */}
            {/* <p className={`${styles.moduleText} main`}>This is styled with CSS Modules!</p> */}
            {/* <ImageContainer source="/images/endava-gx.jpg" ></ImageContainer> */}
            {/* <ImageContainer source={Gx}></ImageContainer> */}
            {/* <JsxDemo></JsxDemo> */}
            {/* <Hello></Hello> */}
            {/* <StudentComponent id="1" phone="961122012" color="red"></StudentComponent> */}
            {/* <Greet name="Mayur"></Greet> */}
            {/* <Greeting name="Mayur"></Greeting> */}
            {/* <LoginControl></LoginControl> */}
            {/* <UseStateHook></UseStateHook> */}
            {/* <UseEffectHook></UseEffectHook> */}
            {/* <UseRefHook></UseRefHook> */}
            {/* <UseReducerHook></UseReducerHook> */}
            {/* <UseContextHook></UseContextHook> */}
            {/* <AxiosExample></AxiosExample> */}
            {/* <UseMemoHook></UseMemoHook> */}
            {/* <UseRefHookExample></UseRefHookExample> */}
            {/* <CounterHookExample></CounterHookExample> */}
            {/* <FetcherHookExample></FetcherHookExample> */}
            {/* <EventObject /> */}
            <MyProvider>
                <MyConsumer></MyConsumer>
            </MyProvider>
            {/* {items?.map((itr, index) => {
                return (
                    <React.Fragment key={index}>
                        <h1>ID: {itr.id}</h1>
                        <h1>Name: {itr.name}</h1>
                        <h1>Phone: {itr.phone}</h1>
                    </React.Fragment>
                )
            })} */}
        </>
    );
};

export default App;
