import React, { useState } from 'react';
import './Adminsignup.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

function Adminsignup() {
    const navigate=useNavigate();
    const [admin_name_signup, setAdmin_name_signup] = useState('');
    const [school_name_signup, setSchool_name_signup] = useState('');
    const [admin_password_signup, setAdmin_password_signup] = useState('');

    const [admin_name_login, setAdmin_name_login] = useState('');
    const [admin_password_login, setAdmin_password_login] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const data = { admin_name_signup, school_name_signup,admin_password_signup,  };
        axios.post('/admin_data', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    function handleSubmit2(event){
        event.preventDefault();
        const data={admin_name_login, admin_password_login};
        axios.post('/admin_login',data)
        .then(response => {
            if(response.data==true){
              navigate('/admin')
            }
            else if(response.data ==false){
              console.log(response.data);
            }
          })
          .catch(error => {
            console.error(error);
          });
    }
    return (
        <>
            <div className="wholeadminsignup">
                <div className="homenav">
                    <div className="left">
                        <h3>Hazri</h3>
                    </div>
                    <div className="right">
                        <a href="#">Learn how to signup</a>
                    </div>
                </div>
                <div className="bothcards">
                    <form onSubmit={handleSubmit}>
                        <div className="card1">
                            <h4>Signup as a School (admin) </h4>
                            <input type="text" value={admin_name_signup} onChange={e => setAdmin_name_signup(e.target.value)} placeholder="Email..." />
                            <input type="text" value={school_name_signup} onChange={e => setSchool_name_signup(e.target.value)} placeholder="Enter School name..." />
                            <input type="text" value={admin_password_signup} onChange={e => setAdmin_password_signup(e.target.value)} placeholder="Password..." />
                            <br></br>
                            <br></br>
                            <button>Signup</button>
                            {/* <Link to=""><button>Signup</button></Link> */}
                        </div>
                    </form>
                    <form onSubmit={handleSubmit2}>
                        <div className="card2">
                            <h4>Login as a School (admin) </h4>
                            <input type="text" value={admin_name_login} onChange={e => setAdmin_name_login(e.target.value)} placeholder="Email..." />
                            <input type="text" value={admin_password_login} onChange={e => setAdmin_password_login(e.target.value)} placeholder="Password..." />
                            <br></br>
                            <br></br>
                            <button>Login</button>
                            {/* <Link to="/admin"><button>Login</button></Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adminsignup