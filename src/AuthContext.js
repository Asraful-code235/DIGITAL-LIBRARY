import React, { useState } from "react";
import { Children } from "react";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ Children }) {
  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
}
