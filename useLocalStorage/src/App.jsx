import { useState } from "react";
// import { useLocalStorage } from "./useLocalStorege";
import "./App.css";
function App() {
  const typedValueFromLocalStorage = localStorage.getItem("typedValue");
  const [typedValue, setTypedValue] = useState(
    typedValueFromLocalStorage || "Type here...!"
  );
  // useLocalStorage();
  function setToLocalStorage(data) {
    localStorage.setItem("typedValue", data);
  }
  function getFromLocalStorage() {
    const typedValueFromLocalStorage = localStorage.getItem("typedValue");
    console.log(typedValueFromLocalStorage);
    setTypedValue(typedValueFromLocalStorage);
  }
  function deleteFromLocalStorage() {
    localStorage.removeItem("typedValue");
    setTypedValue("");
  }
  return (
    <div className="main-body">
      <p className="heading">useLocalStorage</p>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type here..."
          value={typedValue}
          onChange={(e) => setTypedValue(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button onClick={() => setToLocalStorage(typedValue)}>Set</button>
        <button onClick={() => getFromLocalStorage()}>Get</button>
        <button onClick={() => deleteFromLocalStorage()}>Remove</button>
      </div>
    </div>
  );
}

export default App;
