import React from 'react'
import { useNavigate } from 'react-router-dom'
import recruitmentimg from "../component/img/recruitmentimg.jpeg";
import intel from "../component/img/intel.png";
import orcle from "../component/img/oracle.png";
import wipro from "../component/img/wipro.png";
import kelly from "../component/img/kelly.png";
import lotus from "../component/img/lotus.png";
import microsoft from "../component/img/microsoft.png";
import toyota from "../component/img/toyota.png";
import Tencent from "../component/img/Tencent.png";
import Orange from "../component/img/Orange.png";

import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
    const navigate=useNavigate()
  return (
    <div style={{width:'100%'}}>   
      <img className='homeimg' src={recruitmentimg} style={{ width: '80%', height: '550px' }}/>
      <br></br>  <br/> <br></br>
         {/* Home page
         <br></br><br></br>
         <button onClick={()=>navigate('/order')}>Order now</button> */}

      <div className="conb1">
        <div className="c3">
            <h1 className="bh1">What is a recruitment management system?</h1>
            <p className='hp'>A recruitment management system (RMS) is a set of tools designed to manage the recruiting process. 
              It may be the most important core human resources (HR) system. Recruiting is competitive, especially 
              for candidates with high-demand technical skills, and it is driving interest in sophisticated recruiting 
              systems. These systems are being designed to improve the efficiency of recruiters as well as job seekers.</p>
              <p className='hp'>
              Recruitment management systems have a range of components and functions. They include applicant tracking systems 
              for managing job postings and applications, and customer relationship management-type functions to keep applicants 
              connected and engaged. Many of these tasks are automated. Routine tasks, such as scheduling phone calls and in-person 
              interviews, comprise part of the work performed by these systems.</p>
        </div>
        <div className="c4">
            {/* <div ><Link className="text" to='/vegetables'>Click here</Link></div> */}
        </div>
    </div>
    <br></br><br></br>
         <h1 style={{textAlign:'center'}}>Trusted by 1,000 recruitment teams in 35+ countries</h1><br/>
         <div className='home-con'>
          <div className=''>  <img className='homeimg' src={kelly} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={intel} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={lotus} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={microsoft} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={orcle} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={Orange} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={Tencent} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={toyota} style={{ width: '80px', height: '60px' }}/></div>
          <div className=''>  <img className='homeimg' src={wipro} style={{ width: '80px', height: '60px' }}/></div>
         </div>
         <br></br><br></br>
    <div>
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
