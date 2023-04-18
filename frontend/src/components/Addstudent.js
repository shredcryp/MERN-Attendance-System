import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Addstudent.css'
import Navbar from './Navbar';

function Addstudent() {
  const [student_name_signup, setStudent_name_signup] = useState('');
  const [student_id_signup, setStudent_id_signup] = useState('');
  const [student_bloodtype_signup, setStudent_bloodtype_signup] = useState('');
  const [student_standard_signup, setStudent_standard_signup] = useState('');
  const [student_parentname_signup, setStudent_parentname_signup] = useState('');
  const [student_password_signup, setStudent_password_signup] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = { student_name_signup, student_id_signup, student_bloodtype_signup, student_standard_signup,student_parentname_signup,student_password_signup };
    axios.post('/student_signup', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
    return (
        <>
            <div className="wholeaddstudent">
                <Navbar />
                <form onSubmit={handleSubmit}>
                <div className="pair">
                    <h4>Students name: </h4>
                    <input type="text" value={student_name_signup} onChange={e => setStudent_name_signup(e.target.value)}  placeholder="Enter name..." />
                </div>
                <div className="pair">
                    <h4>Student ID: </h4>
                    <input type="text" value={student_id_signup} onChange={e => setStudent_id_signup(e.target.value)} placeholder="Enter ID..." />
                </div>
                <div className="pair">
                    <h4>Blood type: </h4>
                    <input type="text" value={student_bloodtype_signup} onChange={e => setStudent_bloodtype_signup(e.target.value)} placeholder="Enter Subject..." />
                </div>
                <div className="pair">
                    <h4>Standard: </h4>
                    <input type="text" value={student_standard_signup} onChange={e => setStudent_standard_signup(e.target.value)} placeholder="Enter Passcode..." />
                </div>
                <div className="pair">
                    <h4>Parent name: </h4>
                    <input type="text" value={student_parentname_signup} onChange={e => setStudent_parentname_signup(e.target.value)} placeholder="Enter Passcode..." />
                </div>
                <div className="pair">
                    <h4>Password: </h4>
                    <input type="text" value={student_password_signup} onChange={e => setStudent_password_signup(e.target.value)} placeholder="Enter Passcode..." />
                </div>
                
                <button>Add the Student</button>
                </form>
            </div>
        </>
    )
}

export default Addstudent