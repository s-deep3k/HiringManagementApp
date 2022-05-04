import React from "react";
import { authActions } from "../../AuthStore/authStore";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  const dispath = useDispatch();
  const Auth = useSelector(({ auth }) => auth.isAuthenticated);
  const extraDistance = Auth ? "mr-[45%]" : "mr-[50rem]";
  const logoutHandler = () => {
    dispath(authActions.logout());
  };
  return (
    <header className="flex p-6 bg-black rounded-br-full w-auto inset-x-0 shadow-2xl pt-2">
      <img
        className="h-8 w-8 animate-spin mt-2"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
      <NavLink
        to="/"
        className={"text-white mt-1 ml-4 font-sans font-extrabold text-2xl"}
      >
        recruit
      </NavLink>
      <div className={extraDistance + " ml-40 flex space-x-12 "}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
              : "text-white bg-slate-900 bg-opacity-60 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
          }
        >
          Home
        </NavLink>
        {Auth && (
          <>
            {/* <NavLink
              to="/getCandidates"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
                  : "text-white bg-slate-900 bg-opacity-60 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
              }
            >
              Get Candidates
            </NavLink>
            <NavLink
              to="/addCandidate"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
                  : "text-white bg-slate-900 bg-opacity-60 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
              }
            >
              Add Candidate
            </NavLink> */}
            <NavLink
              to="/jobsExplore"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
                  : "text-white bg-slate-900 bg-opacity-60 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out hover:rounded-md py-2 px-6"
              }
            >
              Job Roles
            </NavLink>
          </>
        )}
      </div>
      <div className="flex space-x-5 ">
        {Auth === false && (
          <>
            {location !== "/signup" && (
              <NavLink
                to="/signup"
                className="text-gray-300 duration-300 ease-in-out bg-blue-600 hover:bg-blue-500 px-10 rounded-full"
              >
                <p className="mt-[6px]"> Sign Up</p>
              </NavLink>
            )}
            {location !== "/login" && (
              <NavLink
                to="/login"
                className="bg-gray-100 text-blue-600 duration-300 ease-in-out hover:bg-gray-200 px-10 rounded-full"
              >
                <p className="mt-[6px]"> Login</p>
              </NavLink>
            )}
          </>
        )}
        {Auth && (
          <NavLink
            to="/login"
            className="bg-gray-100 text-blue-600 duration-300 ease-in-out hover:bg-gray-200 px-10 ml-16 rounded-full"
            onClick={logoutHandler}
          >
            <p className="mt-[6px]"> Logout</p>
          </NavLink>
        )}
      </div>
    </header>
  );
};
