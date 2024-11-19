import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAPI();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>{item.body}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FetchData;
