import React from 'react';

function MyComponent() {
    const greeting = "Hello, World!";
    
    return (
        <div>
            <h1>{greeting}</h1>
            <p>Welcome to our site.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
    
    function handleClick() {
        alert("Button clicked!");
    }
}

export default MyComponent;
