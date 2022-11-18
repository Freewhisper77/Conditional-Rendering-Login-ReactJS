import React from "react";
import Login from "./Login";
//When user is loggedIn => just show <h1> in the page
//When user isn't loggedIn => just show <form> in the page

// Create a “Login” component for the form
// Create an “Input” component for the input


// Use Ternary Operator

let isLoggedIn = false; // false OR true

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
