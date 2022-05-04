import React from "react";

export const Footer = () => {
  return (
    <footer className="w-auto shadow-2xl bg-gray-900 rounded-tr-full fixed inset-x-0 bottom-0">
      <p className="font-bold animate-pulse text-center text-gray-300 p-2 ">
        &copy; Designed By TEAM D @{" "}
        <span className="text-yellow-300">EY GDS</span>
      </p>
    </footer>
  );
};
