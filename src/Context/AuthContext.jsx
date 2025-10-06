import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("authUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (email, password) => {
  if (email && password) { 
    const userData = {
      email,
      name: email.split('@')[0], 
      picture: `https://ui-avatars.com/api/?name=${email.split('@')[0]}` 
    };
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
    return { success: true };
  } else {
    return { success: false, message: "Invalid credentials" };
  }
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
