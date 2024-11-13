import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Mycomps from './components/comps';  // Ensure this path is correct


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hellow This is Mariam 
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
      
      {/* Include Greeting component here */}
      <Greeting />
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

      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      
      {/* Self-close the img tag */}
      <img src="welcome.png" alt="welcome" />
    </div>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return(
//       <div className='App'>
//         <Mycomps />
        
//       </div>
//     );
    
//   }
// }

// export default App;