import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from '../src/components/Footer/Footer.component';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import JobCard from '../src/components/JobCard/Jobcard.component';
import SimpleMenu from '../src/components/SimpleMenu/SimpleMenu.component';

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
      //reset TextField states
      setCity("");
      setJobSearch("");
    } catch (error) {
      console.log(error);
    }

  };


  // Just for debugging purposes
  useEffect(() => {
    console.log(jobs);
  }, [jobs])
  

  return (
    <div className="App">

    

      <div>
      
        <form className="inputform" onSubmit={handleSubmit} >

            
            <TextField id="standard-basic" label="What job do you want?" value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription"/>
            <TextField id="standard-basic" label="Where do you want to work?" value={city} onChange={e => setCity(e.target.value)} type="text" name="city"/>
            <SimpleMenu />
            
        
            <Button className="button" type="submit" variant="contained" color="primary">
            Find your new job!
          </Button>
        </form>
      </div>
    
      <main className="job-content">

        { jobs ? jobs.map((job) => {
          return <JobCard url={job.url} name={job.name} age={job.job_age} company={job.hiring_company.name} />
        }) : null}
      
        
      </main>
        <Footer />
    </div>
  );
}

export default App;
