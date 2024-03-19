import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Service = () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Our Services</h1>
        {/* <br/> */}
        <p style={{textIndent:"80px"}}>
A recruitment management system website offers comprehensive services tailored to streamline the hiring process for businesses and job 
seekers alike. These services encompass a range of functionalities designed to optimize recruitment efforts. Firstly, the platform 
provides job posting capabilities, allowing employers to create and publish job listings efficiently. It offers robust candidate 
management features, enabling recruiters to track applicants, schedule interviews, and manage communications seamlessly. Additionally, 
the website offers applicant tracking system (ATS) integration, facilitating the organization and analysis of candidate data. It may 
include resume parsing and screening tools to filter and shortlist applicants effectively.</p><br/> <p style={{textIndent:"80px"}}>Moreover, the platform often incorporates 
features for skill assessment, background checks, and reference verification to ensure thorough candidate evaluation. Furthermore, it 
may offer collaboration tools for hiring teams to coordinate and evaluate candidates collaboratively. The website typically provides
 analytics and reporting functionalities to monitor recruitment metrics and assess the effectiveness of hiring strategies. Lastly, it 
 may offer integration with other HR systems for seamless data transfer and workflow automation.</p><br></br> <p style={{textIndent:"80px"}}>Through these comprehensive services, 
 a recruitment management system website empowers businesses to attract top talent efficiently while providing job seekers with a 
 user-friendly platform to explore career opportunities.</p><br/><br/>
        <footer>
<h1 id="fbf">Contact us</h1>
<div className="footer">
<div className="foot1"> <FontAwesomeIcon icon={faFacebook} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faInstagram} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faTwitterSquare} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faYoutube} /> </div>
</div>
<h3 id="fbf">All copyright are reserved@2024</h3>
</footer>
    </div>
  )
}
