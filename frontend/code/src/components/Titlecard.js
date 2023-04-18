import React from 'react'
import './Titlecard.css'
import Navbar from './Navbar'


function Titlecard() {
  return (
    <>
    <Navbar/>
    <div className="titlecardwhole">
        <h5>select</h5>
        <h5>Photo</h5>
        <h5>Name</h5>
        <h5>Roll no.</h5>
        <h5>DOB</h5>
        <h5>Standard</h5>
    </div>
    </>
  )
}

export default Titlecard