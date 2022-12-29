import React from "react";

const Login = () => {
  return (
    <div>
      <form method="POST" name="login">
        <div className="form-floating mb-3 shadow-sm w-50">
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            placeholder="Username"
          />
          <label htmlFor="usernameInput">Username</label>
        </div>
        <div className="form-floating shadow-sm w-50">
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
      </form>
    </div>
  );
};

export default Login;
