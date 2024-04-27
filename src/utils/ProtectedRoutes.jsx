import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const isAuthenticated = localStorage.getItem("user");
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
