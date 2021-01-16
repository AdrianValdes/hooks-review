import React, { useState, useRef, useEffect } from "react";

export default function UseEffectHook() {
  const [title, setTitle] = useState("default title");
  const inputRef = useRef();

  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });

  const handleClick = () => {
    setTitle(inputRef.current.value);
    /* Because we implemented an uncontrolled input field with the help of 
    the useRef Hook, handleClick is only invoked after the user clicks on the button. 
    This causes a re-render because setTitle performs a state change. */
  };
  console.log("render");

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}
