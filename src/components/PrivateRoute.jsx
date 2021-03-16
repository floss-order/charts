import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component: RouteComponent, ...props}) {
    const token = localStorage.getItem('token')
    return (
        <Route
        {...props} 
        render={routeProps =>
            token
            ?
            <RouteComponent {...routeProps} /> 
            : 
            <Redirect to="/login" />
        }
        />
    )
}

export default PrivateRoute