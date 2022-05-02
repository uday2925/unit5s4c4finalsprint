import {useEffect, useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux"
import { loggedin } from '../Redux/actions';



export const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setpassword]=useState("1234");

  const  handlechange=(e)=>{
    if(e.target.name="password")  
    {
      setpassword(e.target.value)
    }
    
    if(e.target.name="username")
    {
      setUsername(e.target.value)
    }  
    
  }
   
  const handlebutton=()=>{

    dispatch(loggedin(true))
    console.log("hi");
    
      axios.get(`http://localhost:8080/users/?username=${username}&&pass=${password}`)
      .then(function (data) {
              console.log("data1",`http://localhost:8080/users/?username=${username}&&pass=${password}`)
               
      }).then(function(data){
        console.log("data2",data);
      })
    
       
    
  }
  navigate("/orders")
  





    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          
          onChange={(e)=>{
            handlechange(e);
          }}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          
          onChange={(e)=>{
            handlechange(e);
          }}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit"  onClick={()=>handlebutton()}>Login</button>
      </div>
    );
  };