import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from '../src/components/Footer/Footer.component';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import JobCard from '../src/components/JobCard/Jobcard.component';
import ControlledOpenSelect from '../src/components/ControlledOpenSelect/ControlledOpenSelect';



function App() {

  const [jobs, setJobs] = useState();
  const [city, setCity] = useState("");
  const [jobSearch, setJobSearch] = useState("");
  const [searchRadius, setSearchRadius] = useState(75);
  const [postDate, setpostDate] = useState(100);

  const handleSubmit = async (event) => {

    try {
      event.preventDefault()
      const response = await fetch(`/jobs?jobSearch=${jobSearch}&location=${city}&radius_miles=${searchRadius}&days_ago=${postDate}`);
      const json = await response.json();
      setJobs(json.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRadiusChange = event => {
    setSearchRadius(event.target.value);
  };

  const handleDateChange = event => {
    setpostDate(event.target.value);
  };
  

  return (
    <>
    <div className="App">
      
      <div>
        <form className="inputform" onSubmit={handleSubmit} >
            <TextField id="standard-basic" label="Job description or keyword" value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" name="jobdescription"/>
            <TextField id="standard-basic" label="Near what city?" value={city} onChange={e => setCity(e.target.value)} type="text" name="city"/>
            <div className="drop-downs">
              <ControlledOpenSelect title={"Date Posted"} handleChange={handleDateChange} optionone={{name: "Last 10 days", value: 10}} optiontwo={{name: "Last 30 days", value: 30}} optionthree={{name: "Last 60 days", value: 60}}/>

              <ControlledOpenSelect handleChange={handleRadiusChange} title={"Distance"} optionone={{name: "Within 20 miles", value: 20}} optiontwo={{name: "Within 50 miles", value: 50}} optionthree={{name: "Within 100 miles", value: 100}}/>
            </div>
           
            <Button className="button" type="submit" variant="contained" color="primary">
            Find your new job!
          </Button>
        </form>
        <div className="results">
          { jobs ? <p>{jobs.length} results found</p> : null }

          
        </div>
      </div>

      <main className="job-content">
        { jobs ? jobs.map((job) => {
          return <JobCard url={job.url} name={job.name} age={job.job_age} company={job.hiring_company.name} />
        }) : null}


        <Footer jobs={jobs} />
        
      </main>
      

      
      
    </div>
      </>
  );
}

export default App;
