import React from 'react';
import './Jobcard.styles.css';

const JobCard = ( { url, source, name, snippet, location, salary_min, salary_max, age, company} ) => {
  return (
    <div className="container">
      <header>
        <h3>{name}</h3>
        <h4>{company}</h4>
      </header>
      <div>
      <a href={url}>Visit Posting!</a>
      </div>
      <footer>
        <p>
          {age} days old
        </p>
      </footer>
    </div>
  );
}

export default JobCard;