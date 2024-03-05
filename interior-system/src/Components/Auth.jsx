import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registerAPI } from "./Services/allApis";

function Auth({ register }) {
  const registerForm = register ? true : false;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "",
  });

  //  register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, user_type } = userData;
    if (!username || !email || !password || !user_type) {
      alert("Please fill the form completely");
    } else {
      // api call
      const response = await registerAPI(userData);
      console.log(response);
      // if(response.status==200)
    }
  };

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center mt-5 mb-5"
    >
      <div className="container w-75 border shadow ">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              className="img img-fluid rounded mb-4"
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="col-lg-6 mb-5">
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex mt-2 text-success">
                  <span className="h1 fw-bolder mb-5">Interior Harmony</span>
                </div>
                <Form className="text-light w-75">
                  {registerForm && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        placeholder="Enter UserName"
                        name="username"
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter EmailId"
                      name="email"
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictype">
                    <Form.Control
                      as="select"
                      name="user_type"
                      onChange={(e) =>
                        setUserData({ ...userData, user_type: e.target.value })
                      }
                    >
                      <option value="">Select User Type</option>
                      <option value="customer">Customer</option>
                      <option value="agent">Agent</option>
                      {/* Add other user types as needed */}
                    </Form.Control>
                  </Form.Group>

                  {registerForm ? (
                    <div>
                      <Button
                        onClick={handleRegister}
                        variant="dark"
                        className="ms-5 mb-3 mt-3"
                        type="submit"
                        size="lg"
                      >
                        {" "}
                        Register{" "}
                      </Button>
                      <p className="text-dark mt-3">
                        Already have an account?{" "}
                        <Link to={"/login"}>Login Here</Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Button
                        variant="dark"
                        className="ms-5 mb-3 mt-3"
                        type="submit"
                        size="lg"
                      >
                        {" "}
                        Login{" "}
                      </Button>
                      <p className="text-dark mt-3">
                        New User? <Link to={"/register"}>Register Here</Link>
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
