import React, { useEffect, useMemo, useState } from "react";

function WordCount({ children = "" }) {
  const [checked, setChecked] = useState(false);

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  console.log("rendered");
  return (
    <>
      <h1>Word count</h1>
      <input type="checkbox" onChange={() => setChecked((prev) => !prev)} />
      {checked ? "checked" : "not checked"}
      <div>
        <p>
          {children}. ( <strong>{words.length} words</strong>)
        </p>
      </div>
    </>
  );
}

export default WordCount;
