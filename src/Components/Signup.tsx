import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";
// Type Check
type obj = {
  name: string;
  email: string;
  username: string | number;
  pass: string | number;
};

function Signup() {
  const [name, setName] = useState("");
  // UseState for email Input Field
  const [email, setEmail] = useState("");
  // UseState for username Input Field
  const [username, setUsername] = useState("");
  // UseState for password Input Field
  const [pass, setPass] = useState("");
  // data1 variable holds  data
  const [data, setData] = useState<any | []>([]);
  let navigate = useNavigate();
  // Function for name value hold into states
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // Function for email value hold into states
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  // Function for username value hold into states
  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  // Function for password value hold into states
  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };
  // Make Object and holds all input values
  let obj: obj = {
    name: name,
    email: email,
    username: username,
    pass: pass,
  };
  // SignUp Button
  const submitHandler = (e: any) => {
    e.preventDefault();
    let tempUsername = username;
    tempUsername = tempUsername.toLowerCase();
    // Check Validations
    var mailformat =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name === "") {
      alert("Name Field Can Not be Empty");
      document.getElementById("name")?.focus();
    } else if (email === "") {
      alert("Email Field Can Not Be Empty");
      document.getElementById("email")?.focus();
    } else if (!email.match(mailformat)) {
      alert("Email is not proper valid");
      document.getElementById("email")?.focus();
    } else if (username === "") {
      alert("Username Field Can Not Be Empty");
      document.getElementById("username")?.focus();
    } else if (tempUsername !== username) {
      alert("Username Must in Lower Case");
      document.getElementById("username")?.focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass")?.focus();
    } else if (pass.length <= 4) {
      alert("Password length must be greater then 4");
      document.getElementById("pass")?.focus();
    } else {
      alert("Account Created Successfully");
      data.push(obj);
      setData([...data]);
      // Push data into local storage
      localStorage.setItem("username", JSON.stringify(data));
      navigate("/signin");
    }
  };
  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Sign up</h1>
          <div className="inputContainer">
            <input
              onChange={nameHandler}
              autoFocus
              id="name"
              type="text"
              className="input"
              placeholder=""
            />
            <label className="label">Full Name</label>
          </div>
          <div className="inputContainer">
            <input
              onChange={emailHandler}
              id="email"
              type="text"
              className="input"
              placeholder=""
            />
            <label className="label">Email</label>
          </div>
          <div className="inputContainer">
            <input
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
            value="Sign up"
          />

          <Link to="/Signin">
            <input type="submit" className="submitBtn" value="Login" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
