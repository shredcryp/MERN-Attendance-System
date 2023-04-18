import React from 'react'
import './Card.css'
import {useLocation} from "react-router-dom"

function Card() {

  const location = useLocation();
  const tdata = location.state.tdata;
  const sdata = location.state.sdata;

  return (
    <>
      <div className="cardwhole">
        <div className="checkandimg">
          <input type="checkbox" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJA_4qqH7JPiuwebV0qyUfOS-RaEocaXbABKHiD8&s" alt="student image" />
        </div>
        <h4>{sdata[0]["Sname"]}</h4>
        <h4>1100110</h4>
      </div>
    </>
  )
}

export default Card