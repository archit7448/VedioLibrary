import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const successHandler = () => {
    setToken(localStorage.getItem("token"));
    navigate("/explore");
  };

  const ErrorHandler = () => {
    if (error) {
      notificationError("GET ERROR");
    }
  };

  const SignUpHandler = () => {
    async (params) => {
      try {
        const response = await axios.post("/api/auth/signup", {
          params,
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", response.data.user);
        successHandler();
      } catch (error) {
        console.log(error);
        ErrorHandler();
      }
    };
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      successHandler();
    } catch (error) {
      console.log(error);
      ErrorHandler();
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <AuthContext.Provider
      value={{ token, LoginHandler, SignUpHandler, LogOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
