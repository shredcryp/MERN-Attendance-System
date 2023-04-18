import React from 'react'
import './Student.css'
import Navbar from './Navbar'

function Student() {
  return (
    <>
        <Navbar/>
        <div className="studentwhole">
            <div className="pair">
                <h4>Name: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>Roll no.: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>DOB: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>Standard: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>Father: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>Mother: </h4>
                <input type="text" />
            </div>
            <div className="pair">
                <h4>Blood type: </h4>
                <input type="text" />
            </div>
        </div>
    </>
  )
}

export default Student