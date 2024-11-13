//import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

// function Counter() {
//     const [count, setCount] = useState(0);

//     // Move increment function above the return statement
//     const increment = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <h2>Counter</h2>
//             <p>Current Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
// //         </div>
// //     );
// // }

// export default Counter;



function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

  
  
