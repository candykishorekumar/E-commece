import React, { useState } from 'react'
import "../Styles/login.css"

function Auth() {
const[mail,setemail] = useState()
const[Password,setepass] = useState()
const storeUser = JSON.parse(localStorage.getItem("mail"));
const storePass = JSON.parse(localStorage.getItem("password"));
function handlelogin(e) {
  e.preventDefault();

  if(mail.trim() === "" || Password.trim() === ""){
  alert("All fields are required")
  return;
  }



  if (!mail === storeUser && !Password === storePass){
     alert(" Invalid User Accout")
   
   
  }
  else{
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInUser", mail);
     alert("Login Successfully");
    window.location.href = "./dashboard";
   
  }
}

  return (
    <div className='b2' >
        <form onSubmit={handlelogin}>
        <h1 className='b1'>Login Page</h1>
        <div>
            <input type="text" placeholder='Enter Your Email Id' value={mail} onChange={(event) => setemail(event.target.value)} />
        </div>
        <div>
            <input type="text" placeholder='Enter Your Password' value={Password} onChange={(event) => setepass(event.target.value)}/>
        </div>
       <div>
        <button className='b3' type='submit'>Login</button>
        </div>
        <div>
        <a href="./register">Don't have account? please Signup</a>
        </div>
        </form>
    </div>
  )
}

export default Auth

