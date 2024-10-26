import {React, useState} from 'react'
import './login.css'
import axios  from 'axios'

const login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/login', {username, password})
        .then(res => {
            console.log(res);
        })
    }

  return (
    <>
    <div className="main-container">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="username" placeholder = "username" name="username" required onChange = {e => setUsername(e.target.value)} />
                    
                    <input type="password" id="password" placeholder = "password" name="password" required onChange = {e => setPassword(e.target.value)} />
                    
                    <button type="submit">Login</button>
                </form>
            </div>
    </div>
    </>
  )
}

export default login

//in frontend
//npm install react-router-dom


/*import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // state for error message
  const navigate = useNavigate(); // useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/login', { username, password })
      .then(res => {
        if (res.data.success) {  // Adjust based on your backend response structure
          navigate('/home'); // Redirect to the home page on success
        } else {
          setError("Invalid username or password"); // Set error message on failure
        }
      })
      .catch(err => {
        setError("An error occurred. Please try again.");
        console.error(err);
      });
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            required
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>} {/* Display error message *-/}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;*/
