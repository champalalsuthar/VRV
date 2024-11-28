import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import api from "../utils/api";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
};
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "temp@gmail.com",
        password: "Temp@123",
    });
    const [errors, setErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate only the specific field
        const error = validateField(name, value); // validate the changed field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error, // Set only the error for the changed field
        }));
    };
    // Update the validation function to validate only the changed field
    const validateField = (name, value) => {
        switch (name) {
            case "email":
                return validateEmail(value) ? "" : "Invalid email address";
            case "password":
                return validatePassword(value)
                    ? ""
                    : "8-16 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
            default:
                return "";
        }
    };

    // Validate form based on the field being changed
    const validateForm = () => {
        let newErrors = {};
        if (!formData.email || !validateEmail(formData.email))
            newErrors.email = "Invalid email address";
        if (!formData.password || !validatePassword(formData.password))
            newErrors.password =
                "8-16 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";

        setErrors(newErrors);
        return newErrors;
    };
    const handleSubmit = async (e) => {
        console.log("handleSubmit");

        e.preventDefault();
        setIsFormSubmitted(true);
        const validationErrors = validateForm(); // Validate the form

        // If there are errors, do not submit the form
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        try {
            const response = await api.post("/api/login", { email: formData.email, password: formData.password });
            console.log(response)
            console.log(response.data)
            dispatch(login({ token: response.data.authToken, role: response.data.user.type, user: response.data.user, id: response.data.user._id })); // Assuming backend provides token and role
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50 mt-20">
            <div className=" bg-red-100 h-[85vh] flex flex-col w-full  rounded-md">
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-wrap items-center"
                >
                    <div className="w-full sm:w-1/2 relative flex justify-center items-center mb-8 sm:mb-0 h-[85vh] overflow-hidden">
                        <img
                            src="/login.jpeg"
                            alt="login image"
                            className="w-full h-full object-cover opacity-70 transition duration-300 ease-in-out"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 sm:p-8 space-y-4">
                            <p className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 ">
                                <span className="inline-block mr-2 text-3xl ">✈️</span>
                                Sign up/Login now to
                            </p>
                            {/* <p className="text-xl sm:text-2xl font-semibold text-white">
                                <span className="inline-block mr-2 text-3xl">🔒</span>
                                Lock Flight Prices & Pay Later
                            </p>
                            <p className="text-xl sm:text-2xl font-semibold text-white">
                                <span className="inline-block mr-2 text-3xl">🏨</span>
                                Book Hotels @ ₹0
                            </p>
                            <p className="text-xl sm:text-2xl font-semibold text-white">
                                <span className="inline-block mr-2 text-3xl">💸</span>
                                Get 3X refund, if your waitlisted train doesn’t get confirmed
                            </p> */}

                            {/* CTA Button (optional, add if needed) */}
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
                            >
                                Start Now
                            </button>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 flex flex-col items-center">
                        <div className="mb-4 text-center">
                            <h1 className="my-3 text-4xl font-bold">
                                Sign in
                            </h1>
                            <p className="text-sm dark:text-gray-600">
                                Sign in to access your account
                            </p>
                        </div>
                        <div className="space-y-4 w-full">
                            <div className="w-2/3 mx-auto">
                                <label htmlFor="email" className="block mb-1 text-sm">
                                    Email address
                                    <span className="text-red-600 text-sm ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="leroy@jenkins.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                />
                                {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                            </div>
                            {/* Password */}
                            <div className="w-2/3 mx-auto">
                                <div className="flex justify-between mb-1">
                                    <label htmlFor="password" className="text-sm">
                                        Password
                                        <span className="text-red-600 text-sm ml-1">*</span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="**********"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full mx-auto px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    >
                                        {isPasswordVisible ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-600 text-xs">{errors.password}</p>
                                )}
                            </div>
                            {/* <div className="w-2/3 mx-auto text-center mt-4">
                                <p className="text-sm text-right text-gray-600">
                                    <button
                                        type="button"
                                        onClick={() => setForgotPassword(true)}
                                        className="underline text-blue-600"
                                    >
                                        Forgot Password
                                    </button>
                                </p>
                            </div> */}
                        </div>
                        {/* Submit Button */}
                        <div className="space-y-2 w-1/4 mt-4">
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="space-y-2 w-full text-center mt-4">
                            <p className="text-sm text-center text-gray-600">

                                Don't have an account yet?
                                <button
                                    type="button"
                                    onClick={() => {
                                        navigate("/signup")
                                    }}
                                    className="underline text-blue-600"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;

