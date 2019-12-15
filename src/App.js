import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from '../src/components/Footer/Footer.component';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';




function App() {

  const [jobs, setJobs] = useState();
  const [city, setCity] = useState("");
  const [jobSearch, setJobSearch] = useState("");


  const handleSubmit = async (event) => {

    try {
      event.preventDefault()
      const response = await fetch(`/jobs?jobSearch=${jobSearch}&location=${city}`);
      const json = await response.json();
      setJobs(json.jobs);
      setCity("");
      setJobSearch("");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="App">

      <div>
        <form className="inputform" onSubmit={handleSubmit} >
            {/* <input value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription" placeholder="What are you looking for?"></input> */}

            <TextField id="standard-basic" label="What job do you want?" value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription"/>
            <TextField id="standard-basic" label="Where do you want to work?" value={city} onChange={e => setCity(e.target.value)} type="text" name="city"/>

            {/* <input value={city} onChange={e => setCity(e.target.value)} type="text" name="city" placeholder="Where are you looking?"></input> */}
            <Button className="button" type="submit" variant="contained" color="primary">
            Search Jobs!
          </Button>
        </form>
      </div>
    
      <main className="job-content">
        
      </main>
        
      
      <Footer />
    </div>
  );
}

export default App;
