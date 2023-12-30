import "./App.css";
import { useReducer } from "react";

// Define a reducer function to handle the state changes for the counter app
function counterReducer(state, action) {
  // The commented code below is the previous version of the reducer function
  // using multiple if statements
  // if (action.type === "INCREMENT") {
  //   // If the action type is INCREMENT, increase the count by 1
  //   const updateCount = state.count + 1;
  //   // Return a new state object with the updated count
  //   return {
  //     count: updateCount,
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   // If the action type is DECREMENT, decrease the count by 1
  //   const updatedCount = state.count - 1;
  //   // Return a new state object with the updated count
  //   return {
  //     count: updatedCount,
  //   };
  // }
  // if (action.type === "RESET") {
  //   // If the action type is RESET, reset the count to 0
  //   const updatedCount = 0;
  //   // Return a new state object with the updated count
  //   return {
  //     count: updatedCount,
  //   };
  // }
  // // If the action type is not recognized, return the current state
  // return state;

  // Use object destructuring to access the count property from the state object
  const { count } = state;
  // Use a switch statement to handle different action types
  switch (action.type) {
    case "INCREMENT":
      // If the action type is INCREMENT, increase the count by 1
      return { count: count + 1 };
    case "DECREMENT":
      // If the action type is DECREMENT, decrease the count by 1
      return { count: count - 1 };
    case "RESET":
      // If the action type is RESET, reset the count to 0
      return { count: 0 };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
}

// Define a functional component for the counter app
function App() {
  // Use the useReducer hook to manage the state and dispatch actions
  // Pass the reducer function and the initial state object as arguments
  // The useReducer hook returns an array with two elements: the current state and a dispatch function
  // Use array destructuring to store them in variables
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  // Define a function to handle the increment action
  function handleIncrement() {
    // Use the dispatch function to send an action object with the type INCREMENT
    counterDispatch({
      type: "INCREMENT",
    });
  }

  // Define a function to handle the decrement action
  function handleDecrement() {
    // Use the dispatch function to send an action object with the type DECREMENT
    counterDispatch({
      type: "DECREMENT",
    });
  }

  // Define a function to handle the reset action
  function handleReset() {
    // Use the dispatch function to send an action object with the type RESET
    counterDispatch({
      type: "RESET",
    });
  }

  // Return the JSX code for rendering the counter app
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        {/* Use the onClick attribute to attach the handler functions to the buttons */}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      {/* Use the state variable and access its count property to display the count value */}
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

// Export the App component as default
export default App;
