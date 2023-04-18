import React from 'react'
import './Adminchose.css'
import Navbar from './Navbar';


function Adminchose() {
    return (
        <>
            <div className="wholeadminchose">
                <Navbar />
                <div className="bothadmin">

                    <div className="leftofadmin">
                        <a href="/addteacher" ><button>Add a Teacher</button></a>
                    </div>
                    <div className="rightofadmin">
                        <a href="/addstudent"><button>Add a Student</button></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Adminchose