import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const MyComponent = () => {
  // Define the state to hold the object
  const [data, setData] = useState({
    value1: null,
    value2: null,
    value3: null,
    value4: null,
  });

  // Function to fetch data from APIs
  const fetchData = async () => {
    try {
      // Make all API calls concurrently
      const [response1, response2, response3, response4] = await Promise.all([
        axios.get('https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/1'),
        axios.get('https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/2'),
        axios.get('https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/3'),
        axios.get('https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/4'),
      ]);

      // Update the state with the fetched data
      setData({
        value1: response1.data,
        value2: response2.data,
        value3: response3.data,
        value4: response4.data,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render the component
  return (
    <div>
    {console.log(data)}
      <h1>My Component</h1>
      <p>Value 1: {data.value1 ? JSON.stringify(data.value1) : 'Loading...'}</p>
      <p>Value 2: {data.value2 ? JSON.stringify(data.value2) : 'Loading...'}</p>
      <p>Value 3: {data.value3 ? JSON.stringify(data.value3) : 'Loading...'}</p>
      <p>Value 4: {data.value4 ? JSON.stringify(data.value4) : 'Loading...'}</p>
    </div>
  );
};

export default MyComponent;
