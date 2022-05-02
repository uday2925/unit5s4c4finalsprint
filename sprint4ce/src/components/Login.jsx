import {useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux"
import { loggedin } from '../Redux/actions';



export const Login = () => {

  const dispatch=useDispatch();

  const handlebutton=()=>{
    dispatch(loggedin(true))
  }
  





    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          // onChange={(e)=>{
          //   handlechange(e);
          // }}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          // onChange={(e)=>{
          //   handlechange(e);
          // }}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit"  onClick={()=>handlebutton()}>Login</button>
      </div>
    );
  };