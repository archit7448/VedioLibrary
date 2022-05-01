import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/header/header";
import { Sidebar } from "../../Components/sidebar/sidebar";
import { useAuth } from "../../context/Auth";
import "./login.css";
export const LogInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LoginHandler } = useAuth();
  const guestHandler = () => {
    setEmail("architsingh@gmail.com");
    setPassword("architSingh123");
  };
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="login-container">
          <h1 className="login-heading">Login</h1>
          <h3 className="login-small-heading">Email</h3>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h3 className="login-small-heading">Password</h3>
          <input
            type="text"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h3 className="guest-heading" onClick={() => guestHandler()}>
            login with guest credentials?
          </h3>
          <button
            className="button-primary button-login"
            onClick={() => LoginHandler({ email: email, password: password })}
          >
            Login
          </button>
          <button
            className="button-secondary button-login"
            onClick={() => navigate("/SignUp")}
          >
            New User? SignUp
          </button>
        </div>
      </aside>
    </main>
  );
};
