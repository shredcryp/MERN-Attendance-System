import React, { useState } from 'react';
import './Attendance.css';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Attendance() {
  const location = useLocation();
  const tdata = location.state.tdata;
  const sdata = location.state.sdata;

  // Define state variable for checked entries
  const [checkedEntries, setCheckedEntries] = useState(new Array(sdata.length).fill(false));

  // Handler function for checkbox change
  function handleCheckboxChange(index) {
    const updatedCheckedEntries = checkedEntries.map((entry, i) => {
      return i === index ? !entry : entry;
    });
    setCheckedEntries(updatedCheckedEntries);
  }

  // Handler function for submit button
  function handleSubmit() {
    // console.log(checkedEntries);
    const data={checkedEntries};
    axios.post('/teacher_login_studentatten', data)
      .then(response =>{
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="attendancewhole">
        <div className="formiddle">
          <Navbar />
          <div className="teacherinfo">
            <div className="teachername">
              <h4>{tdata["Tname"]}</h4>
            </div>
            <div className="teachersubject">
              <h4>{tdata["Tid"]}</h4>
            </div>
            <div className="teacherdate">
              <h4>{tdata["Tsubject"]}</h4>
            </div>
            <div class="dropdown">
          <button class="dropbtn">Select Class ⬇️</button>
          <div class="dropdown-content">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
</div>
            </div>

          </div>
          <div className="teacherinfo">{/* Render teacher info */}</div>
          <table bordercolor="#2c87f0">
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Roll no.</th>
          </tr>

            {sdata.map((student, index) => {
              return (
                <tr key={student.Sid}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedEntries[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{student.Sname}</td>
                  <td>{student.Sid}</td>
                </tr>
              );
            })}
          </table>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Attendance;
