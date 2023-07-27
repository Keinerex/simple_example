import React from 'react';
import Counter from "../Counter/Counter";
import style from "./style.module.css"

function App() {
    return (
        <div className={style.wrap}>
            <Counter />
        </div>
    );
}

export default App;