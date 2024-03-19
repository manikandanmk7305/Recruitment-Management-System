import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Product = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(0)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)
  const [edu, setEdu] = useState(0)
  const [field, setField] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/userdet')
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1 style={{textAlign:'center',textDecoration:"underline dotted"}}>User's Details</h1>
      <table className='udet'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th>Field</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {post.map(x => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.username}</td>
              <td>{x.age}</td>
              <td>{x.edu}</td>
              <td>{x.field}</td>
            </tr>
          ))}
        </tbody>
      </table><br/><br/>
      <div className='flex-container'>
        {post.map(x => (
        <div className='flex-items'><img src={x.imgs} width={150} height={150} /><br/>
        <p> Name:{x.username}</p>
        <p> Age:{x.age}</p>
        <p> Education:{x.edu}</p>
        <p> Intrested Field:<br/>{x.field}</p>
        </div>
           ))}
           </div>

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
