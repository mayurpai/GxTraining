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


const App = () => {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    }
    return (
        <div style={style}>
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
            <FetcherHookExample></FetcherHookExample>
        </div>
    );
};

export default App;
