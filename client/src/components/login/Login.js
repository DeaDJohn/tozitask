import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Login.scss";

async function loginUser(credentials) {
    return fetch('//localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

async function RegisterUser(credentials) {
    console.log(JSON.stringify(credentials));
    return fetch('//localhost:8080/api/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    const handleRegister = async e => {
        e.preventDefault();
        const token = await RegisterUser({
          username,
          email,
          password
        });
        
    }

    return (
        <div className="login-wrapper d-flex">
            <div className='login-col'>
                <h1 className='mb-5' >Please Log In</h1>
                <form onSubmit={handleLogin}>
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
            <div className='login-col'>
                <h1 className='mb-5' >Register</h1>
                <form onSubmit={handleRegister}>
                    <div className='row mb-4'>
                        <label for="register-name" >Username</label>
                        <input id="register-name" className='form-control' type="text" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className='row mb-4'>
                        <label for="register-email" >E-mail</label>
                        <input id="register-email" className='form-control' type="text" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='row mb-4'>
                        <label for="register-pass">Password</label>
                        <input id="register-pass" className='form-control' type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='row justify-content-end'>
                        <button type="submit" className='btn btn-primary ms-auto mt-5'>Register</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }