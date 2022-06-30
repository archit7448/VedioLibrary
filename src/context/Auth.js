import { createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../utility/notification/utility-toast";
import { useData } from "./data";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const successHandler = () => {
    navigate("/explore");
    dispatch({ type: "UPDATE_TOKEN", payload: localStorage.getItem("token") });
    notifySuccess("Login Sucess!");
  };

  const ErrorHandler = () => {
    if (error) {
      notificationError("GET ERROR");
    }
  };

  const signUpHandler = async (params) => {
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

  const loginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      successHandler();
    } catch (error) {
      console.log(error);
      ErrorHandler();
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    dispatch({ type: "UPDATE_TOKEN" });
    notifySuccess("Logout sucess!");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, signUpHandler, logOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
