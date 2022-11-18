import React from "react";
import Login from "./Login";
//When user is loggedIn => just show <h1> in the page
//When user isn't loggedIn => just show <form> in the page

// Create a “Login” component for the form
// Create an “Input” component for the input

let isLoggedIn = true; // false OR true

function renderConditional() {
    if (isLoggedIn) {
        return <Login />;
    } else {
        return <h1>Hello</h1>;
    }
}
function App() {
  return (
    <div className="container">
        {renderConditional()}
    </div>
  );
}

export default App;
