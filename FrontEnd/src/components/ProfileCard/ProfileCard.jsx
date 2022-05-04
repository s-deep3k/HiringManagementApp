import React from "react";

export const ProfileCard = (props) => {
  return (
    <section className="w-60 ml-10 bg-gray-100 rounded-2xl px-8 py-5 shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-gray-800 transition duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <span className="text-emerald-400 font-semibold cursor-pointer">
          Active
        </span>
        <span className="text-yellow-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </span>
      </div>
      <div className="flex mt-6 mb-3">
        <img
          src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
          className="rounded-full w-14 h-14 "
          alt="profile"
        />
        <h2 className="font-bold text-gray-800 text-xl tracking-wide ml-5">
          {props.name}
        </h2>
      </div>
      <hr />
      <span
        className="text-gray-500 text-sm hover:text-gray-600 cursor-pointer"
        onClick={() => props.onClick(props.id)}
      >
        Click here to view details
      </span>
    </section>
  );
};
