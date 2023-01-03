import React from "react";
import { AuthContext } from "../auth/Context";

export const useAuth = () => {
  let context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}