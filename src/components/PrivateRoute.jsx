import React,{ useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const {isLogged} = useSelector(state => state.user);

    return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
