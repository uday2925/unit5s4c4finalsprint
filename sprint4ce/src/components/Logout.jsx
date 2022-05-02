import { Home } from "./Home";
import { useDispatch } from "react-redux";

import { loggedin } from "../Redux/actions";



export const Logout = () => {
    // Logout component, just log user out and take him to `/` homepage
    const dispatch=useDispatch();
    // suggestion: if you are storing anyting in redux it's a good idea to
    // empty it before loggin out. eg: order
    dispatch(loggedin(false))
  
    return (<Home/>);
  };