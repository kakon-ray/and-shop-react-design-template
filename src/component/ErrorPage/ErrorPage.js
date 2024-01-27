import React from "react";
import PageBanner from "../PageBanner/PageBanner";

const ErrorPage = () => {
  const error = {
    fontSize: "100px",
  };
  return (
    <div className="mb-5 pb-5">
      <PageBanner page="Error" />
      <div className="text-center">
        <p style={error}>404</p>
        <h2>Sorry, the page you've requested is not available</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
