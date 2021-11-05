import React from "react";
import { Route, Redirect } from "react-router-dom";

//isAuth: isAuth,
function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else if (!isAuth) {
          return <Redirect to="/Admin" />;
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
