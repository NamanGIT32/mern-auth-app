import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email:"",
    password:""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = loginInfo;
    if(!email || !password){
      return handleError("email, password is required");
    }
    try {
      const response = await fetch("http://localhost:8080/auth/login",{
        method:"POST",
        headers:{
          'Content-type': 'application/json'
        },
        body:JSON.stringify(loginInfo)
      })
      const result= await response.json();
      console.log(result)
      const {success, message, error, jwtToken, name, email} = result;
      if(success){
        handleSuccess(message);
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        setTimeout(()=> {
          navigate("/")
        },1000)
      }
      else if(error){
        handleError(error.details[0].message)
      }
      else if(!success){
        handleError(message);
      }
    } catch (error) {
        handleError(error)
    }

  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="enter your email" value={loginInfo.email} onChange={(e)=> setLoginInfo({...loginInfo, email:e.target.value})}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="enter your password" value={loginInfo.password} onChange={(e)=> setLoginInfo({...loginInfo, password:e.target.value})}/>
        </div>
        <button type="submit">Login</button>
        <span>
          already have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
