import React, { useState } from "react";
import StudentForm from "./components/studentform";
import StudentTable from "./components/studenttable";
import estudiante from "./images/estudiante.jpg"; 
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);


  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#FFBD00", minHeight: "100vh" }}>
      
      <img 
        src={estudiante} 
        alt="Estudiante" 
        style={{ width: "200px", borderRadius: "10px", marginBottom: "20px" }} 
      />


    {/*FORMULARIO*/}

      <h1>Registro de Estudiantes</h1>
      
      <StudentForm onAddStudent={addStudent} />




    {/* TABLA DE ESTUDIANTES */}
      <StudentTable students={students} />
    </div>
  );
};

export default App;