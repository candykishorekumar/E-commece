import React, { useState } from 'react'
import "../Styles/register.css"

function Register() {
 const[mail,setmail] = useState()
 const[username,setName] = useState()
 const[password,setpass] = useState()

function handleRegister(e){
    e.preventDefault();

    if( mail.trim() === ""){
         alert("All fields are Required")
         return;

    } else{
        localStorage.setItem("mail",JSON.stringify(mail));
    }

        if (username.trim() === ""){
        alert("All fields are Required")
        return;
        }
        else{
             localStorage.setItem("username",JSON.stringify(username));
        }

        if (password.length < 6) {
        alert("Password must be minimum 6 characters")
        return;
        }
        else{
             localStorage.setItem("password",JSON.stringify(password));
             alert("Registered Sucessfully")
              window.location.href="./auth"
        }

    // const user = {
    //     mail : mail,
    //     username: username,
    //     password: password,
    // };

    // localStorage.setItem("user",JSON.stringify(username));
    // localStorage.setItem("user",JSON.stringify(password));
    
}

  return (
    <div className='a2'>
        
        <h1 className='a1'>Register page</h1>
        <form onSubmit={handleRegister}>
        <div>
            <input type="Text" placeholder='Enter Your Email Id' value={mail} onChange={(event) => setmail(event.target.value) }/>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Name'  value={username} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Password' value={password} onChange={(event) => setpass(event.target.value)}/>
        </div>
        <div>
            <button className='a3' type='submit'>Register</button>
        </div>
        </form>
        <a href='/auth'> Already Have Account! login</a>
        
    </div>
  )
}

export default Register
