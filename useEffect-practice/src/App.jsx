import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }
//whe the component mounts, the document title is set to "Using the useEffect Hook"
//if we pass the empty array as the second argument, the effect will only run once when the component mounts
//passing the toggle as the second argument, the effect will run whenever the toggle state changes

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect Hook";
  }, [toggle]);
//the 

  return (
    <>
    <h1>Using the useEffect Hook</h1>
    <button onClick={clickHandler}>
      Toggle message
    </button>
    {toggle && <h2>Welcome to Little Lemon</h2>}
    </>
  )
}

export default App
