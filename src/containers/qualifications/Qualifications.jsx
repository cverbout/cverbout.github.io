import React from 'react';
import "./qualifications.css";

const Qualifications = () => {
  return (
    <div className='mw__qual' id='qual'>
      <div className='mw__qual-header'>
        <h1>Qualifications</h1>
      </div>
      <div className='mw__qual-exp'>
        <h2>Experience</h2>
        <h3>Open Source Project Management Intern | King County Metro | Seattle, WA | May 2021 - September 2021</h3>
        <p>This internship was an extension of my work at UW for CSE 495. Led by Anat Caspi, the Director of the UW Taskar Center for Accessible 
          Technology (TCAT), I performed tertiary work that assisted with their OpenSideWalks (OSW) program. Through this, I was introduced to 
          King County Metro (KCM) and their CommonPaths program that operates with the same data and structures as OSW</p>
        <h3>Volunteer | PSU Computer Action Team | Portland, OR | September 2021 - Present</h3>
        <p>The Computer Action Team at Portland State University is the De facto IT department for the Maseeh College of Engineering and Computer 
          Science.
        </p>
      </div>
      <div className='mw__qual-edu'>
        <h2>Education</h2>
        <div className='mw__qual-edu_psu'>
        <h3>Portland State University | Portland, OR | Spet. 2021 - Present | GPA: 4.0</h3>
        <p>Postbaccalaureate Computer Science Graduate Preparation</p>
        </div>
        <div className='mw__qual-edu_uw'>
        <h3>University of Washington | Seattle, WA | Sept. 2017 - June 2021 | GPA: 3.54</h3>
        <p>B.A. Major in Geography: Data Science</p>
        </div>
      </div>
    </div>
  )
}

export default Qualifications