import React, { useState } from "react";

function Roles(props) {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(true);
    props.onClick();
  };
  const onClose = () => {
    setView(false);
    props.onClose();
  };
  const red = view
    ? "bg-red-red-50 text-red-500"
    : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700";
  return (
    <>
      <li className="border-gray-400 bg-gray-100 flex flex-row w-1/2 mb-2 rounded-xl">
        <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-blue-100">
          <div className="flex-1 pl-1 mr-16">
            <div className="font-bold text-2xl text-blue-900">{props.role}</div>
          </div>
          <div
            className={
              red +
              " text-wrap text-center flex  rounded-md cursor-pointer text-bold flex-col justify-center items-center mr-10 p-2"
            }
            onClick={view ? onClose : onView}
          >
            {view ? "Close" : "View All Candidates!"}
          </div>
        </div>
      </li>
    </>
  );
}

export default Roles;
