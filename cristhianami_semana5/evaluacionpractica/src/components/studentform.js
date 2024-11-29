import React, { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState(""); 
  const [course, setCourse] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const student = {
      name,
      age,
      email,
      course,
    };

    
    onAddStudent(student);

    
    setName("");
    setAge("");
    setEmail(""); 
    setCourse(""); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Registrar Estudiante</h2>
        
        {/* Campo para el nombre */}
        <div className="input-group">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>
        
        {/* Campo para la edad */}
        <div className="input-group">
          <label htmlFor="age" className="label">
            Edad
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
            required
          />
        </div>
        
        {/* Campo para el correo electrónico */}
        <div className="input-group">
          <label htmlFor="email" className="label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>

        {/* Campo para el curso */}
        <div className="input-group">
          <label htmlFor="course" className="label">
            Curso
          </label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="input"
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" className="button">
          Registrar
        </button>
      </form>
    </div>
  );
};



// FORMATO DE LA PRESENTACION DE LOS CAMPOS NOMBRE Y EDAD, CORREO Y CURSO
const styles = {
    tableContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px 0",
    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      marginTop: "20px",
      textAlign: "center",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
    th: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px 15px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px 15px",
      border: "1px solid #ddd",
    },
    header: {
      color: "#fff",
      fontWeight: "bold",
    },
  };
  

export default StudentForm;