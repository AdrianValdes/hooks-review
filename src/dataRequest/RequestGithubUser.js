import React, { useEffect, useRef, useState } from "react";

export default function RequestGithubUser() {
  const [data, setData] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [githubLogin, setGithubLogin] = useState("");
  const inputName = useRef("");

  console.log(data);
  useEffect(() => {
    if (!githubLogin) return;

    async function requestGithubUser() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubLogin}`
        );
        const userData = await response.json();
        setData(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    requestGithubUser();
  }, [githubLogin]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <>
      <h1>Request github user</h1>

      <input ref={inputName} />
      <button onClick={() => setGithubLogin(inputName.current.value)}>
        Search
      </button>
      <div className="githubUser">
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>
    </>
  );
}
