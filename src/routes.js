import React from "react";
import {
    Routes,
    BrowserRouter,
    Route,
    Navigate,
  } from "react-router-dom";

import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login'


function AllRoutes() {
    const checkRoutes = sessionStorage.getItem("token");

    return (
  
              <BrowserRouter >
                  <Routes >
  
                    {!checkRoutes && (
                    <Route exact path="/" element={<Login />} />)}
  
                    <Route path="/dashboard" element={<Dashboard />} />     
  
                    <Route path="*" element={<Navigate to ={checkRoutes ? "/dashboard" : "/"} />} />
  
                  </Routes>
              </BrowserRouter>
    )
}


export default AllRoutes