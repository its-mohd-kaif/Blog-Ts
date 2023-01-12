import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  // UseState For Input Text field
  const [username, setUsername] = useState("");
  // UseState for password Input Field
  const [pass, setPass] = useState("");
  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  // Function for password value hold into states
  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };
  let navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();
    // Get data from local storage
    var user: any = JSON.parse(localStorage.getItem("username") as any);
    let users = user;
    // Check Validation
    if (username === "") {
      alert("Username Field Can Not Be Empty");
      document.getElementById("username")?.focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass")?.focus();
    } else if (users[0].username !== username) {
      alert("Wrong Username");
      document.getElementById("username")?.focus();
    } else if (users[0].pass !== pass) {
      alert("Wrong Password");
      document.getElementById("pass")?.focus();
    } else if (users[0].username === username && users[0].pass === pass) {
      alert("Login Successfully");
      // Navigate to Home page
      navigate("/blog");
    }
  };
  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Login</h1>
          <div className="inputContainer">
            <input
              autoFocus
              onChange={userHandler}
              id="username"
              type="text"
              className="input"
              placeholder=""
            />
            <label className="label">Username</label>
          </div>
          <div className="inputContainer">
            <input
              onChange={passHandler}
              id="pass"
              type="password"
              className="input"
              placeholder=""
            />
            <label className="label">Password</label>
          </div>

          <input
            onClick={submitHandler}
            type="submit"
            className="submitBtn"
            value="Login"
          />
          <Link to="/Signup">
            <input type="submit" className="submitBtn" value="Signup" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
