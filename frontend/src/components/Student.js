import React from 'react'
import './Student.css'
import Navbar from './Navbar'
import {useLocation} from "react-router-dom"

function Student() {
  const location = useLocation();
  const sdata = location.state.sdata;
  return (
    <>
        <Navbar/>
        <div className="studentwhole">
            <div className="pair">
                <h4>Name: </h4>
                <h3>{sdata["Sname"]}</h3>
            </div>
            <div className="pair">
                <h4>Roll no.: </h4>
                <h3>{sdata["Sid"]}</h3>
            </div>
            <div className="pair">
                <h4>Standard: </h4>
                <h3>{sdata["Sstandard"]}</h3>
            </div>
            <div className="pair">
                <h4>Father: </h4>
                <h3>{sdata["Sparentname"]}</h3>
            </div>
            <div className="pair">
                <h4>Blood type: </h4>
                <h3>{sdata["Sbloodtype"]}</h3>
            </div>
            <div className="pair">
                <h4>Attendance: </h4>
                <h3>{(sdata["Scount"]/sdata["Stotal"])*100}</h3>
            </div>
        </div>
    </>
  )
}

export default Student