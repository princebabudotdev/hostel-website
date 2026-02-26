import AuthContext from "./AuthContext";

import React from 'react'

const UseAuth = () => {
  if (!AuthContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return React.useContext(AuthContext);
}

export default UseAuth