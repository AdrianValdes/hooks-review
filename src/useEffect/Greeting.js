import { useEffect, useState } from "react";

export default function Greeting({ name }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Hello, " + name;
    console.log("the name was re-rendered");
  });

  return (
    <>
      <h1 className="Greeting">Hello, {name}</h1>
      <p>The counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}
