import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);

  const handleEdit = (index) => {
    // Add your edit logic here
    console.log("Editing item at index", index);
  };

  return (
    <div className="mt-5">
      <div className="container">
        <Link
          to="/register"
          className="btn-btn-primary"
          style={{ marginLeft: "300px" }}
        >
          Add data
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td className="buttons">
                  <Link
                    to="/register"
                    className="btn btn-success"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Link>
                  <Link to="/register" className="btn btn-primary">
                    Update
                  </Link>
                  <Link to="/register" className="btn btn-danger">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
