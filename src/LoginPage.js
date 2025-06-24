import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div>
      <center>
      <h2>Login Page</h2>
      
      <input 
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <button >Login</button>
      </center>
    </div>
  );
}

export default LoginPage;
