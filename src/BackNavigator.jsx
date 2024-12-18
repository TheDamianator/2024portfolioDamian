import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const BackNavigator = () => {
  return (
    <div className="fixed top-0 left-0 p-2">
      <Link to="/" className="text-NewColorNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
    </div>
  );
};

export default BackNavigator;
