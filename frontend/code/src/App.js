import './App.css';
import Home from './components/Home'
import Attendance from './components/Attendance'
import Student from './components/Student';
import Aboutus from './components/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
