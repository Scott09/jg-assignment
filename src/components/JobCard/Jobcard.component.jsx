import React from 'react';
import './Jobcard.styles.css';

const JobCard = ( { url, name, location, salary_min, salary_max, age, company} ) => {
  return (
    <div className="container">
      <header>
        <h3>{name}</h3>
        <h4>{company}</h4>
      </header>
      <div>
        <p>{location}</p>
        <p>Salary: {salary_min}$-{salary_max}$</p>
        <p><a href={url}>Visit Posting!</a></p>
      </div>
      <footer>
        <div>

        </div>  
          
          {age} days old
      </footer>
    </div>
  );
}

export default JobCard;