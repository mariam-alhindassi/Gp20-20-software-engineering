import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> refs/remotes/origin/main
