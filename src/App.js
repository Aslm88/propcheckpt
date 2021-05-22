import './App.css';
import Profile from './profile/profile component.js';
import React from 'react';





function App() {

  const styleObject = {
    width:"500px",
    margin:"10px auto 30px auto",
    padding:"20px",
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    boxShadow:"0 5px 10px 2px rgba(0.0.0.25)"
  }
  
  return (
    <>
    <div style={styleObject}>
      <Profile  > <img src="man.png" alt="profile img"/> </Profile>
      </div>
    </>
  );
}

export default App;
