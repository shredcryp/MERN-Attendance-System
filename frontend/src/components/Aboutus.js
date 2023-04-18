import React from 'react'
import './Aboutus.css'
import Navbar from './Navbar'

function Aboutus() {
    return (
        <>
            <Navbar />
            <div className="aboutuswhole">
                <div className="greypart">
                    <div className="info">
                        <h4>Shreedhar Patil</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJA_4qqH7JPiuwebV0qyUfOS-RaEocaXbABKHiD8&s" alt="" />
                        <h4>21cs048@charusat.edu.in</h4>
                    </div>
                    <div className="info">
                        <h4>Bhavyen Mehta</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJA_4qqH7JPiuwebV0qyUfOS-RaEocaXbABKHiD8&s" alt="" />
                        <h4>21cs030@charusat.edu.in</h4>
                    </div>
                    <div className="info">
                        <h4>Karan Motiani</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJA_4qqH7JPiuwebV0qyUfOS-RaEocaXbABKHiD8&s" alt="" />
                        <h4>21cs034@charusat.edu.in</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus