import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Card name={name} setName={setName} />
      <p>Hello How are you, my name is: {name}</p>
    </>
  );
}

export default App;
