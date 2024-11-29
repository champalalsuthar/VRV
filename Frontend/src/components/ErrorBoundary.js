

import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can show any fallback UI here
      toast.error(`Something went wrong: ${this.state.errorMessage}`);
      return (
        <div className="w-full flex justify-center items-center h-screen">
          <h2 className="text-4xl font-bold">Something went wrong!</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
