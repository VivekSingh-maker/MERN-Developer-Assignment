// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\6.ReactAndState_Management\client\src\components\Form.jsx
import React, { useState } from 'react';
import User from "./User";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [newUser, setNewUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      const result = await response.json();
      setNewUser(result);  
      setFormData({ name: '', email: '', age: '' });  
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New User</h1>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* {newUser && (
        <div>
          <h2>New User Added:</h2>
          <p>Name: {newUser.name}</p>
          <p>Email: {newUser.email}</p>
          <p>Age: {newUser.age}</p>
        </div>
      )} */}

      {newUser && (
        <User name={newUser.name} email={newUser.email} age={newUser.age}/>
      )}
    </div>
  );
}

export default Form;
