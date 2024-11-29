

import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-xl mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 mt-4 inline-block">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
