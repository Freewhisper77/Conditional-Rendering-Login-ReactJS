import React from "react";
//When user is loggedIn => just show <h1> in the page
//When user isn't loggedIn => just show <form> in the page

let isLoggedIn = false; // false OR true

function renderConditional() {
    if (isLoggedIn) {
        return (
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        )
    } else {
        return (<h1>Hello</h1>);
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
