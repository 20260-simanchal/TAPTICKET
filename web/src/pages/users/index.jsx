import React, { useEffect, useState } from "react";
// import "./styles.css";
import axios from "../../connector";

const UserPage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5000/sample/get');
      const { status, cls, msg, payload } = data;
      setLoading(false);
      setUsers(payload.users);

    } catch (e) {
      console.log('Error', e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="a">
      <h1 style={{ color: 'white' }}>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.mobile}</td>
              <td>{user.dob}</td>
              <td>{user.gender}</td>
            </tr>
          ))}







          {loading && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>Loading...</td>
            </tr>
          )}
          {!loading && users.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;