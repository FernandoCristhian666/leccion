import React from "react";

const StudentTable = ({ students }) => {
  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Edad</th>
            <th style={styles.th}>Correo Electrónico</th>
            <th style={styles.th}>Curso</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td style={styles.td}>{student.name}</td>
                <td style={styles.td}>{student.age}</td>
                <td style={styles.td}>{student.email}</td>
                <td style={styles.td}>{student.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.td}>
                No hay estudiantes registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;


// ESTILO TABLA
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