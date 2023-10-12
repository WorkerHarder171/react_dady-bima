import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({});

  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;

  const navigate = useNavigate();
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validasi email
    if (!emailRegex.test(formLogin.email)) {
      errors.email = "Email tidak valid";
      formIsValid = true;
    }else{
      errors.email = "";
      formIsValid = false;
    }

    // Validasi password
    if (formLogin.password.length < 8) {
      errors.password = "Password harus memiliki minimal 8 karakter";
      formIsValid = true;
    } else{
      errors.password = "";
      formIsValid = false;
    }

    setValidation(errors);
    return formIsValid;
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
    validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", formLogin.email);
    console.log("Password:", formLogin.password);

    const hasError = validateForm();
    if (!hasError) {
      if (formLogin.email === "" || formLogin.password === "") {
        alert("Masukan Username dan Password anda!");
      } else {
        alert("Login anda berhasil");
        navigate("/LandingPage");
      }
    } else {
      alert("Login gagal");
    }
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <form
        className="mx-auto border p-5 border-2 w-25"
        onSubmit={handleSubmit}
      >
        <div className="display-6 p-3 text-uppercase text-center">Login</div>
        <div className="my-2">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formLogin.email}
            onChange={handleLoginChange}
            placeholder="Email"
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formLogin.password}
            onChange={handleLoginChange}
            placeholder="Password"
          />
        </div>
      {validation?.username && (
        <p className="error py-2" style={{ color: "red" }}>
          {validation?.username}
        </p>
      )}
      {validation?.password && (
        <p className="error py-2" style={{ color: "red" }}>
          {validation?.password}
        </p>
      )}
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
