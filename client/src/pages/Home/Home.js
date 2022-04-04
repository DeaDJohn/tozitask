import React, { useState, useContext } from 'react'
import Login from '../../components/login/Login';
import { useDataLayerValue } from '../../DataLayer';


export default function Home() {
  const [{ user }, dispatch] = useDataLayerValue();
  
  console.log(user);
  if(!user) {
    return <Login />
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
