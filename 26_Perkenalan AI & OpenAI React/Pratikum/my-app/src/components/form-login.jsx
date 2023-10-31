import React from "react";

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-25 mx-auto vh-100">
        <div className="container ">
          <form action="" className="p-5">
            <h1 className="display-6 fw-bold">WELCOME</h1>
            <p className="text-dark"> Please Login With Your Account</p>
            <input
              type="email"
              className="p-3 m-2 border-0 border-bottom border-black"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
            <input
              type="password"
              className="p-3 m-2 border-0 border-bottom border-black"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
            <p className="text-end text-dark">forgot password ?</p>
            <div className="button-group">
              <button className="btn m-2 btn-dark w-100">Login</button>
              <button className="btn m-2 btn-secondary w-100">
                Login with Google
              </button>
            </div>
          </form>
          <p>
            Don't have account? <b>Sign Up</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
