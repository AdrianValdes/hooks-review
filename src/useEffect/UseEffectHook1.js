import React, { useEffect, useRef, useState } from "react";
import "../index.css";
function UseEffectHook1() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  //This function will run every time the component re-renders,
  // but it doesn't need to. How to solve it?
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });

  console.log("render");

  const handleClick = () => setTitle(titleRef.current.value);
  const handleCheckboxChange = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <label htmlFor="darkMode">dark mode</label>
      <input
        name="darkMode"
        type="checkbox"
        checked={darkMode}
        onChange={handleCheckboxChange}
      />
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default UseEffectHook1;
