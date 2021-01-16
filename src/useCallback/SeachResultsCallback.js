import { useCallback, useEffect, useState } from "react";

export default function SearchResultsCallback() {
  const [data0, setData0] = useState({ hits: [] });
  const [data1, setData1] = useState({ hits: [] });

  // ✅ Preserves identity when its own deps are the same
  const getFetchUrl = useCallback((query) => {
    return "https://hn.algolia.com/api/v1/search?query=" + query;
  }, []); // ✅ Callback deps are OK

  useEffect(() => {
    const url = getFetchUrl("react");

    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData0(result);
    }

    fetchData();
  }, [getFetchUrl]); // ✅ Effect deps are OK

  useEffect(() => {
    const url = getFetchUrl("redux");

    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData1(result);
    }

    fetchData();
  }, [getFetchUrl]); // ✅ Effect deps are OK

  return (
    <>
      <ul>
        {data1.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {data0.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

/* function SearchResults() {
  // 🔴 Re-triggers all effects on every render
  function getFetchUrl(query) {
    return "https://hn.algolia.com/api/v1/search?query=" + query;
  }

  useEffect(() => {
    const url = getFetchUrl("react");
    // ... Fetch data and do something ...
  }, [getFetchUrl]); // 🚧 Deps are correct but they change too often

  useEffect(() => {
    const url = getFetchUrl("redux");
    // ... Fetch data and do something ...
  }, [getFetchUrl]); // 🚧 Deps are correct but they change too often

  // ...
} */
