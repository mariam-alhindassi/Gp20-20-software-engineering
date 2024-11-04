import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    // Move increment function above the return statement
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
