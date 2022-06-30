import { Header, Sidebar } from "../../Components/index";
import { useState } from "react";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utility/emailValidation/email";
import { notifyMessage } from "../../utility/notification/utility-toast";
export const SignUpPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpHandler } = useAuth();

  const verificationCheck = () => {
    if (validateEmail(email)) {
      if (firstName.length > 1 && lastName.length > 1 && password.length > 1) {
        signUpHandler({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
      }
    } else {
      notifyMessage("Invalid Email");
    }
  };

  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="login-container signUp-container">
          <h1 className="login-heading">Sign Up</h1>
          <h3 className="login-small-heading">First Name</h3>
          <input
            type="text"
            value={firstName}
            placeholder="Enter FirstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <h3 className="login-small-heading">Last Name</h3>
          <input
            type="text"
            value={lastName}
            placeholder="Enter LastName"
            onChange={(event) => setLastName(event.target.value)}
          />
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
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="button-primary button-login"
            onClick={() => verificationCheck()}
          >
            Sign Up
          </button>
          <button
            className="button-secondary button-login"
            onClick={() => navigate("/login")}
          >
            Already user? Login
          </button>
        </div>
      </aside>
    </main>
  );
};
