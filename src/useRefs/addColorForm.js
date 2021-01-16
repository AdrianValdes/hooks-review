import React, { useRef, useState } from "react";

export default function AddColorForm() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const textTitle = useRef();
  const hexColor = useRef();

  console.log(textTitle);

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    setBackgroundColor(color);
    textTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          ref={textTitle}
          type="text"
          placeholder="color title..."
          required
        />
        <input ref={hexColor} type="color" required />
        <button>ADD</button>
      </form>
      <div>
        {/* <h2></h2> */}
        <div style={{ height: 50, backgroundColor: backgroundColor }} />
      </div>
    </>
  );
}
