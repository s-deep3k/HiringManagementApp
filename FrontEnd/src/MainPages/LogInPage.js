import React, { useState } from "react";
import { authActions } from "../AuthStore/authStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  let uname;
  let pass;
  let res;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // console.log({ name, dob, gender, email, mobile, yoe, role });
    uname = user.username;
    pass = user.password;
    axios
      .post("http://localhost:8080/Project/checkCredential", {
        username: uname,
        password: pass,
      })
      .then((response) => {
        console.log(response);
        res = response.data;
        console.log(res);
        if (res === "Access") {
          loginHandler();
          alert("Successfully Logged In!");
          navigate("/jobsExplore");
          return;
        } else {
          alert("Invalid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              {/* <label for="email-address" className="sr-only">
                  User ID
                </label> */}
              <input
                id="email-address"
                name="username"
                type="email"
                onChange={onChange}
                value={user.username}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email ID"
              />
            </div>
            <div>
              {/* <label for="password" className="sr-only">
                  Password
                </label> */}
              <input
                id="password"
                name="password"
                type="password"
                onChange={onChange}
                value={user.password}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              onClick={onSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
