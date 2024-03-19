import React from 'react'
import about from "../component/img/about.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const About = () => {
  return (
    <div>
      <br/><br/><br/>
    <div className="conb">
        <div className="c1">
           {/* <div ><Link className="text" to="/fruits">Click here</Link></div> */}
        </div>
        <div className="c2">
                <h1 className="bh1">RMS</h1>
            <p className='about-p'>
            A recruitment management system for a website serves as a pivotal tool in streamlining the <br/>hiring process, enhancing 
            efficiency, and optimizing talent acquisition strategies. By integrating<br/> various functionalities such as job posting, 
            candidate screening, interview scheduling, and <br/>applicant tracking, this system empowers recruiters and HR professionals 
            to effectively manage<br/> the entire recruitment lifecycle from a centralized platform. Additionally, features like resume 
            parsing,<br/> skill assessments, and automated communications facilitate swift decision-making and enable organizations to 
            identify top talent swiftly. Furthermore, the system can offer analytics and reporting capabilities, providing valuable 
            insights into recruitment metrics and trends, thus aiding in strategic workforce planning. Overall, a well-designed 
            recruitment management system not only saves time and resources but also enhances the candidate experience, ultimately
             contributing to the success and <br/>growth of the organization.
                </p>
        </div>
    </div>
      <br></br><br></br><br/>
      <br></br><br></br><br/>
      <br></br><br></br><br/>
      <br></br><br></br><br/>
      <br></br><br></br><br/>
      <br></br><br></br><br/>
    <div className='footer-p'>
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
    </div>
  )
}
