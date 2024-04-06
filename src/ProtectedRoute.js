import React from 'react'
import {useSelector} from "react-redux"
import {useNavigate, useLocation, Navigate} from "react-router-dom"

import { getUser } from './features/User/userSlice';

const ProtectedRoute = ({children}) => {
    const user = useSelector(getUser);
    console.log("Protected User", user);
     let location = useLocation();

    if(user.length == 0) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;