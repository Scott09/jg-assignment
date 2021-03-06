import React from 'react';
import './Footer.styles.css';

const Footer = ({jobs}) => {
  
  return (
    <div className={jobs ? 'footer' : 'noJobs'}>
      <a href="https://www.ziprecruiter.com/jobs" id="jobs_widget_link"><span>Job Search Powered by</span> <span id="zr_logo_container"><img id="zr_logo" src="https://www.ziprecruiter.com/img/logos/logo-sm-black-304px.png" alt="ZipRecruiter" width="120" /></span></a>
    </div>
  );
}

export default Footer;