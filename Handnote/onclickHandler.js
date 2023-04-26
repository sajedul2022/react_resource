
// 01. Onclick -fetch data with id 
						
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleClick = async (id) => {
    try {
      const response = await fetch(`https://example.com/api/${id}`);   //  `${API_PATH}/cat_project/${id}`
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api");  
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleClick(item.id)}>Fetch Data</button>
        </div>
      ))}
    </div>
  );
}

export default App;

// ========================================================================================================================================
											02. Simple Click with id 
					
  const handleClick   = (e) => {
	const getId   = e.currentTarget.getAttribute("data-value1");
	console.log(getId);
	alert(getId);
  
   };


<button onClick={() => handleClick(element.id)}>{element.name}</button>

========================================================================================================================================
												03. // Simple Onclick Handler




function MyComponent() {
  const myList = ["apple", "banana", "orange"];

  const handleClick = (item) => {
    console.log("You clicked:", item);
  };

  return (
    <ul>
      {myList.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
