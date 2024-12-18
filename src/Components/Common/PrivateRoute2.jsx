import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute2 = ({ children }) => {
    const[user , setUser] = useState(localStorage.getItem("user_details"));

    if(user == null) return children;

    return <Navigate to={"/"} /> 
 
};

export default PrivateRoute2;
