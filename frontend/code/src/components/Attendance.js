import React from 'react'
import Titlecard from './Titlecard'
import Card from './Card'
import './Attendance.css'

function Attendance() {
  return (
    <>
    <div className="attendancewhole">
        <Titlecard />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    </>
  )
}

export default Attendance