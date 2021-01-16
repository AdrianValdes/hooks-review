import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [data, setData] = useState({ hits: [] }); // This pattern is nice to avoid checking for the existence of data in the rendering
  const [query, setQuery] = useState("react");

  useEffect(() => {
    function getFetchUrl() {
      return "https://hn.algolia.com/api/v1/search?query=" + query;
    }

    async function fetchData() {
      const response = await fetch(getFetchUrl());
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, [query]);
  console.log(data);
  return (
    <>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
