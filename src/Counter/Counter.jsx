import React, {useState} from 'react';
import Button from "../Button/Button";


function Counter() {

    const [value, setValue] = useState(0)

    return (
        <>
            <Button onClick={() => setValue(value - 1)}>-</Button>
            {value}
            <Button onClick={() => setValue(value + 1)}>+</Button>
        </>
    );
}

export default Counter;