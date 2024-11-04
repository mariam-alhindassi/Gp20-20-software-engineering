import React from 'react';

function MyComponent() {
    const greeting = "Hello, World!";
    
    // Move handleClick function above the return statement
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <p>Welcome to our site.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

function Greeting() {
    const name = "Ahmed";
    const isLoggedIn = true;

    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Welcome back!</p>

            {isLoggedIn ? <button>Logout<button> : <button>Login</button>
            
            <img src="welcome.png">
        </div>
    );
}

export default Greeting;
export default MyComponent;
