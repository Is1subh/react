import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ element: element, ...rest }) => {
    let token = localStorage.getItem('token')

    return (
        token ? <Navigate to='/' /> : <Outlet />
    )
}

export default PublicRoute;