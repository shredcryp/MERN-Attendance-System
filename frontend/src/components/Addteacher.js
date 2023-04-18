import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Addteacher.css'
import Navbar from './Navbar';


function Addteacher() {
  const [teacher_name_signup, setTeacher_name_signup] = useState('');
  const [teacher_id_signup, setTeacher_id_signup] = useState('');
  const [teacher_subject_signup,setTeacher_subject_signup] = useState('');
  const [teacher_password_signup,setTeacher_password_signup] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
    const data = { teacher_name_signup,teacher_id_signup,teacher_subject_signup ,teacher_password_signup};
    axios.post('/teacher_signup', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
    return (
        <>
            <div className="wholeaddteacher">
                <Navbar />
                <form onSubmit={handleSubmit}>
                <div className="pair">
                    <h4>Teacher's name: </h4>
                    <input type="text" value={teacher_name_signup} onChange={e => setTeacher_name_signup(e.target.value)} placeholder="Enter name..." />
                </div>
                <div className="pair">
                    <h4>Teacher ID: </h4>
                    <input type="text" value={teacher_id_signup} onChange={e => setTeacher_id_signup(e.target.value)} placeholder="Enter ID..." />
                </div>
                <div className="pair">
                    <h4>Subject: </h4>
                    <input type="text" value={teacher_subject_signup} onChange={e => setTeacher_subject_signup(e.target.value)} placeholder="Enter Subject..." />
                </div>
                <div className="pair">
                    <h4>Password: </h4>
                    <input type="text" value={teacher_password_signup} onChange={e => setTeacher_password_signup(e.target.value)} placeholder="Enter Passcode..." />
                </div>
                <button>Add the Teacher</button>
                </form>
            </div>
        </>
    )
}

export default Addteacher