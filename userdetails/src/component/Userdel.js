import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Userdel.css'
export const Userdel = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(0)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)
  const [edu, setEdu] = useState(0)
  const [field, setField] = useState(0)
  const[imgs,setImgs]=useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/userdet')
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/userdet', {"id": id, "username": username, "age": age,"edu":edu,"field":field,"imgs":imgs})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/userdet/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(post.filter(user => user.id !== id))
      })
      .catch(err => {
        console.log(err);
      })
  }

  const [popup, setPopup] = useState(false)
  const [id1, setId1] = useState(0)
  const [username1,setUsername1] = useState('')
  const [age1, setAge1] = useState(0)
  const [edu1, setEdu1] = useState(0)
  const [field1, setField1] = useState(0)
  const[imgs1,setImgs1]=useState('')

  const openPopup = (x) => {
    setPopup(true)
    setId1(x.id)
    setUsername1(x.username)
    setAge1(x.age)
    setEdu1(x.edu)
    setField1(x.field)
    setImgs1(x.imgs)
  }

  const handleUpdate = () => {
    // e.preventDefault();
    axios.put(`http://localhost:3001/userdet/${id1}`, {"id": id1, "username": username1, "age": age1, "edu":edu1, "field":field1,"imgs":imgs1})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th className="user-table-header">Id</th>
            <th className="user-table-header">Name</th>
            <th className="user-table-header">Age</th>
            <th className="user-table-header">Education</th>
            <th className="user-table-header">Field</th>
            <th className="user-table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {post.map(x => (
            <tr key={x.id} className="user-table-row">
              <td className="user-table-data">{x.id}</td>
              <td className="user-table-data">{x.username}</td>
              <td className="user-table-data">{x.age}</td>
              <td className="user-table-data">{x.edu}</td>
              <td className="user-table-data">{x.field}</td>
              <td className="user-table-data">
                <button className="user-action-button" onClick={() => openPopup(x)}>Update</button>
                <button className="user-action-button" onClick={() => handleDelete(x.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {popup &&
        <form className="popup-form" onSubmit={handleUpdate}>
          <button className="close-button" onClick={() => setPopup(false)}>X</button><br/>
          <label className="popup-label">Id:</label>
          <input className="popup-input" type='number' value={id1} onChange={(e) => setId1(e.target.value)} />
          <br></br>

          <label className="popup-label">Name:</label>
          <input className="popup-input" type='text' value={username1} onChange={(e) => setUsername1(e.target.value)} />
          <br></br>

          <label className="popup-label">Age:</label>
          <input className="popup-input" type='number' value={age1} onChange={(e) => setAge1(e.target.value)} />
          <br></br>
          <label className="popup-label">Education:</label>
          <input className="popup-input" type='text' value={edu1} onChange={(e) => setEdu1(e.target.value)} />
          <br></br>
          <label className="popup-label">Field:</label>
          <input className="popup-input" type='text' value={field1} onChange={(e) => setField1(e.target.value)} />
          <br></br>
          <label>User Img:</label>
            <input type='text' value={imgs1} onChange={(e)=>{
                setImgs1(e.target.value)}}/><br></br><br></br>
          <button className="submit-button" type='submit'>Submit</button>
        </form>
      }
      <br/>
      <br></br><br></br>
      <br/>
      <br></br><br></br>
      <br/>
      <br></br><br></br>
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
