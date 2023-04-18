import './App.css'
import Home from './components/Home'
import Attendance from './components/Attendance'
import Student from './components/Student'
import Aboutus from './components/Aboutus'
import Adminchose from './components/Adminchose'
import Addteacher from './components/Addteacher'
import Addstudent from './components/Addstudent'
import Adminsignup from './components/Adminsignup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/admin" element={<Adminchose/>} />
        <Route path="/addteacher" element={<Addteacher/>} />
        <Route path="/addstudent" element={<Addstudent/>} />
        <Route path="/adminsignup" element={<Adminsignup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
