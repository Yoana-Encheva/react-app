import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userId: "",
  role: "",
});

const calculateRemainingTokenTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const formattedExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = formattedExpirationTime - currentTime;

  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTokenTime = localStorage.getItem("expirationTokenTime");
  const remainingTime = calculateRemainingTokenTime(storedExpirationTokenTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTokenTime");
    return null;
  }

  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken = tokenData?.token;

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState("");
  const userIsLoggedIn = !!token;
  const [role, setRole] = useState(localStorage.getItem("role"));

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTokenTime");
    localStorage.removeItem("role");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime, localId) => {
    const userRole =
      localId === "K3rVxz8sZVW3uTL3MX6ROcHkGGm1" ? "admin" : "user";
    setRole(userRole);
    setToken(token);
    setUserId(localId);

    localStorage.setItem("role", userRole);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTokenTime", expirationTime);

    const remainingTime = calculateRemainingTokenTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userId: userId,
    role: role,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
