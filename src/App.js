import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Footer from '../src/components/Footer/Footer.component';



function App() {

  const [jobs, setJobs] = useState();
  const [city, setCity] = useState("");
  const [jobSearch, setJobSearch] = useState("");


  const fetchJobData = () => {
    axios.get(``)
  }



  return (
    <div className="App">
      
      <main className="job-content">
        <div>
        <form className="inputform" onSubmit={fetchJobData} >

            <input value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription" placeholder="What are you looking for?"></input>

            <input value={city} onChange={e => setCity(e.target.value)} type="text" name="city" placeholder="Where are you looking?"></input>
          
            <button type="submit">Search now!</button>
         </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
