import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import {Link, useNavigate} from 'react-router-dom';


function Home() {

  let tdata;
  let sdata;

  const navigate = useNavigate();

  const [studentemail, setStudentemail] = useState('');
  const [studentpassword, setStudentpassword] = useState('');

  const [teacheremail, setTeacheremail] = useState('');
  const [teacherpassword, setTeacherpassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    const data={studentemail, studentpassword};

    axios.post('/student_login',data)
    .then(response => {
      console.log(response.data)
      sdata=response.data[1];
      if(response.data[0]==true){
        navigate('/student',{state: {sdata:sdata}})
      }
      else if(response.data[0] ==false){
        console.log(response.data[0]);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  function handleSubmit2(event) {
    event.preventDefault();
    const data = { teacheremail, teacherpassword };
   
    axios.post('/teacher_login', data)
      .then(response => {
        console.log(response.data)
        // console.log(response.data[1].Tname)
        tdata = response.data[1];
        sdata=response.data[2];
        if(response.data[0]==true){
          // navigate('/attendance')
          navigate('/card', {state: {tdata: tdata, sdata:sdata}})
          navigate('/attendance', { state: { tdata: tdata ,sdata:sdata}})

        }
        else if(response.data[0] ==false){
          console.log(response.data);
        }
        
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="wholehome">
        <div className="homenav">
          <div className="left">
            <h3>Hazri</h3>
          </div>
          <div className="right">
            <Link to="/adminsignup">Signup/Login as a School</Link>
          </div>
        </div>
        <div className="bothcards">
          <form onSubmit={handleSubmit}>
            <div className="card1">
              <h4>Login as a Student</h4>
              <input type="text" value={studentemail} onChange={e => setStudentemail(e.target.value)} placeholder="Email..." />
              <input type="text" value={studentpassword} onChange={e => setStudentpassword(e.target.value)} placeholder="Password..." />
              <br></br>
              <br></br>
              <button>Login as a Student</button>
              {/* <Link to="/student"><button>Login as a Student</button></Link> */}
            </div>
          </form>
          <form onSubmit={handleSubmit2}>
            <div className="card2">
              <h4>Login as a Teacher</h4>
              <input type="text" value={teacheremail} onChange={e => setTeacheremail(e.target.value)} placeholder="Email..." />
              <input type="text" value={teacherpassword} onChange={e => setTeacherpassword(e.target.value)} placeholder="Password..." />
              <br></br>
              <br></br>
              <button>Login as a Teacher</button>
              
              {/* <Link to="/attendance"><button>Login as a Teacher</button></Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;