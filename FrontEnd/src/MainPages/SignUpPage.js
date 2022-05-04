import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let fullname = user.fullname,
    username = user.username,
    password = user.password;
  let res;

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // console.log({ name, dob, gender, email, mobile, yoe, role })
    axios
      .post("http://localhost:8080/Project/addUser", {
        fullname: fullname,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        res = response.status;
        console.log(res);
        if (res === 200) {
          alert("Successfully Signed Up!");
          navigate("/login");
          return;
        } else {
          alert("Invalid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // if (res=== "Access") {
    //   loginHandler();
    //   alert("Successfully Logged In!");
    //   navigate("/jobsExplore");
    //   return;
    // } else {
    //   alert("Invalid");
    // }
  };
  return (
    <>
      <form>
        <div className="container">
          <div className="flex items-center mt-10 bg-transparent">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src="https://source.unsplash.com/user/erondu/1600x900"
                    alt="img"
                  />
                </div>
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                  <div className="w-full">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </div>
                    <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                      Sign up
                    </h1>
                    <div>
                      <label className="block text-sm">Full Name</label>
                      <input
                        type="text"
                        name="fullname"
                        onChange={onchange}
                        required
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm">Email ID</label>
                      <input
                        type="email"
                        name="username"
                        onChange={onchange}
                        required
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Email ID"
                      />
                    </div>
                    <div>
                      <label className="block mt-4 text-sm">Password</label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={onchange}
                        required
                      />
                    </div>
                    <button
                      onClick={onsubmit}
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                      to="/login"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
