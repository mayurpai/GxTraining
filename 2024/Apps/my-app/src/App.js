import React from 'react';
import { HelloWorld } from './components/HelloWorld';
import InlineStyledComponent from './components/InlineStyledComponent';
import { StyledWithCSS } from './components/StyledWithCSS';
import styles from './styles/StyledWithModule.module.css';

const App = () => {
    return (
        <div>
            <HelloWorld />
            <InlineStyledComponent />
            <StyledWithCSS />
            <p className={styles.moduleText}>This is styled with CSS Modules!</p>
        </div>
    );
};

export default App;
