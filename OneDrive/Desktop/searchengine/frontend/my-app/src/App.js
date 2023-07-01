
import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
import {BiSearch} from "react-icons/bi"
import Footer from './Footer';
function App() {
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/search', { query });
      setResults(response.data);
    } catch (err) {
      console.error('Error searching:', err);
    }
  };
  return (
    <>
   
    <div className='App'>
    <h1> se@rch eng!ne </h1>
      <form  className = "form" onSubmit={handleSearch}>
       <span> <input  className=' inputdata' type="text" placeholder='search here' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className='btn' type="submit"><BiSearch size ={22}/></button> </span>
      </form>

      <ul>
        {results.map((item) => (
          <li key={item._id}>{item.content}</li>
        ))}
      </ul>
      
    </div>
    <Footer/>
    </>
  )
}

export default App;