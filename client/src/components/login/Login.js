import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Login.scss";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1 className='mb-5' >Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className='row mb-4'>
                    <label for="login-name" >Username</label>
                    <input id="login-name" className='form-control' type="text" onChange={e => setUserName(e.target.value)} />
                </div>
                <div className='row mb-4'>
                    <label for="login-pass">Password</label>
                    <input id="login-pass" className='form-control' type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='row justify-content-end'>
                    <button type="submit" className='btn btn-primary ms-auto mt-5'>Login</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }