import React from 'react';
import './Jobcard.styles.css';

const JobCard = ( { url, source, name, snippet, location, salary_min, salary_max} ) => {
  return (
    <div className="container">
      <div>
        
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
      <a href={url}>Visit Posting!</a>
      </div>
    </div>
  );
}

export default JobCard;