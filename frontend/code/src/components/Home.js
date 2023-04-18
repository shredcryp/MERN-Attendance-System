import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="homewhole">
            <div className="hazri">
                <h3>Hazri</h3>
            </div>
            {/* <div className="bothcards"> */}
                <div className="logincard">
                    <h3>Login</h3>
                    <input type="text" placeholder="Enter email..." />
                    <input type="text" placeholder="Enter password..." />
                    <select name="power" id="power">
                        <option value="Select">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                    <button>Login</button>
                </div>
                <a href="" >Signup as a school</a>
                {/* <div className="logincard">
                    <h3>Signup as a school</h3>
                    <input type="text" placeholder="Enter email..." />
                    <input type="text" placeholder="Enter password..." />
                    <button>Signup</button>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Home