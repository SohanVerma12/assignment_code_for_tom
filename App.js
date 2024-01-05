import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.log("Error fetching json", error);
            }
        };

        fetchData();
    }, []);

    const rangeData = jsonData.slice(0, 6);

    const removeCard = (indexToRemove) => {
        const updatedData = jsonData.filter((_, index) => index !== indexToRemove);
        setJsonData(updatedData)
    }

    return (
        <div>
            {rangeData.map((item, index) => (
                <div key={index} className="card">
                <h3>UserId :  {item.userId}</h3>
                <h3>Id :      {item.id}</h3>
                <h3>Title :   {item.title}</h3>
                <h3>Body :   {item.body}</h3>


                <button onClick={() => removeCard(index)}>remove card</button>
                </div>
            ))}
        </div>
    );
};
export default App;