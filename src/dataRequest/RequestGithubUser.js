import React, { useEffect, useRef, useState } from "react";

export default function RequestGithubUser() {
  const [data, setData] = useState("");
  const [githubLogin, setGithubLogin] = useState("");
  const inputName = useRef("");

  useEffect(() => {
    if (!githubLogin) return;

    async function requestGithubUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubLogin}`
        );
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.error(error);
      }
    }
    requestGithubUser();
  }, [githubLogin]);

  console.log(inputName.current.value);
  return (
    <>
      <h1>Request github user</h1>

      <input ref={inputName} />
      <button onClick={() => setGithubLogin(inputName.current.value)}>
        Search
      </button>
      <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
    </>
  );
}
