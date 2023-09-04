import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery"; // Import jQuery

const Login = ({ onLogin }) => {
  const [email, setemail] = useState("john@mail.com");
  const [password, setPassword] = useState("changeme3");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    // Show a loading spinner or message using jQuery
    $(".loading-spinner").show(); // Assuming you have a loading spinner with the class "loading-spinner"

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.status === 201 || response.status === 204) {
        onLogin(email);

        // Extract and store the access token from the response if applicable
        const data = await response.json();
        const accessToken = data.access_token;
        localStorage.setItem("access_token", accessToken);

        // Navigate to the home page
        navigate("/");
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Hide the loading spinner or message when the request is complete
      $(".loading-spinner").hide();
    }
  };

  const handleClear = () => {
    setemail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Sign In</h1>
          <hr />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-center">
          <img
            src="/assets/login.png"
            className="card-img"
            alt="Background"
            height="75%"
          />
        </div>
        <div className="col mx-auto" style={{ marginTop: "7em" }}>
          <form className="needs-validation" noValidate>
            <div className="form-group">
              <label>email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <div className="d-flex justify-content-center">
              <div className="loading-spinner" style={{ display: "none" }}>
                Loading...
              </div>
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSubmit}
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-primary"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
