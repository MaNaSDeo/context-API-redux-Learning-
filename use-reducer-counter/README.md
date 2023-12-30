# React Counter App

This is a basic React application implementing a simple counter. The application uses React's useReducer hook to manage the state of the counter.

# How to Run

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run the following commands:

# Install dependencies

`npm install`

# Start the development server

`npm start`

The application should now be running at `http://localhost:5173`. Open this URL in your web browser to view the counter app.

# Code Overview

`App.js`
The main component of the application is `App.js`. It contains the counter state, a reducer function (`counterReducer`), and functions to handle increment, decrement, and reset actions. The `useReducer` hook is used to manage the state in a more structured way.

`counterReducer`
The `counterReducer` function handles different types of actions (INCREMENT, DECREMENT, RESET) and updates the state accordingly using a switch statement.

## Actions

    Increment: Increases the counter by 1.
    Decrement: Decreases the counter by 1.
    Reset: Resets the counter to 0.

## How to Use

    Click the "Increment" button to increase the counter.
    Click the "Decrement" button to decrease the counter.
    Click the "Reset" button to reset the counter to 0.

The current counter value is displayed on the page.

Feel free to modify and extend the code to suit your needs!
