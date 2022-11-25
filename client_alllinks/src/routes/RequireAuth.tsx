import React, { useContext } from 'react'
import {
  useLocation,
  Navigate
} from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';



function RequireAuth({ children }: { children: JSX.Element }) {
  const {loading, authenticated } = useContext(AuthContext);

  let location = useLocation();

  if (loading) {
    return <h1>.</h1>;
  }else{
    if (authenticated) {
      return children;
    }else{
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  }
}



export default RequireAuth;