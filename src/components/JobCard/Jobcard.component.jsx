import React from 'react';
import './Jobcard.styles.css';

const JobCard = ( { url, name, location, salary_min, salary_max, age, company, snippet} ) => {

  // snippet comes back with some html tags so i'm just removing them here
  const text = snippet.replace(/(<([^>]+)>)/g, "");

  return (
    <div className="container">
      <header className="cardheader">
        <h3 className="headeritem">{name}</h3>
        <h4 className="headeritem">{company}</h4>
        <p className="headeritem">{location}</p>
        <p className="salary">Salary: {salary_min}$-{salary_max}$</p>
      </header>
      <main>
        <p className="snippet">{text}</p>
        
      </main>
      <footer className="cardfooter">
          <span className="footeritem"><a href={url}>Visit Job Posting!</a></span>
          <span className="footeritem">{age} days old</span>
      </footer>
    </div>
  );
}

export default JobCard;