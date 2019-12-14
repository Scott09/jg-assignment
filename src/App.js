import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const [jobs, setJobs] = useState();
  const [city, setCity] = useState("");
  const [jobSearch, setJobSearch] = useState("");


  const fetchJobData = () => {
    
  }



  return (
    <div className="App">
      
      <main className="job-content">
        <div>
        <form className="inputform" >

            <input value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription" placeholder="What are you looking for?"></input>

            <input value={city} onChange={e => setCity(e.target.value)} type="text" name="city" placeholder="Where are you looking?"></input>
          
            <button type="submit">Search now!</button>
         </form>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
