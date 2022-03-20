import React, { useState } from 'react'
import Login from '../../components/login/Login';


export default function Home() {
  const [token, setToken] = useState();
  console.log(token);
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="container-fluid">
        <div className="row pageHeader">
            <h1 className="pageHeader__title">Home</h1>
        </div>
        <div className="row pageContent">
          {
            
          }
        </div>
    </div>
  )
}
