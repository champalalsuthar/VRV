import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import api from "../utils/api";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { register } from "../API/register";

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
};

const validateMobile = (mobile) => {
    const regex = /^[6-9]\d{9}$/; // Mobile number should start with 6-9 and be 10 digits
    return regex.test(mobile);
};


const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile: "",
        gender: "male",
        country_code: "+91",
        type: "User",
        cover: "",
        status: "active",
    });
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    console.log(formData.type);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
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
            case "first_name":
                return value ? "" : "First Name is required";
            case "email":
                return validateEmail(value) ? "" : "Invalid email address";
            case "password":
                return validatePassword(value)
                    ? ""
                    : "8-16 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
            case "mobile":
                return validateMobile(value)
                    ? ""
                    : "Invalid number (10 digits, starts with 6-9)";
            case "gender":
                return value ? "" : "Gender is required";
            default:
                return "";
        }
    };

    // Validate form based on the field being changed
    const validateForm = () => {
        let newErrors = {};
        if (!formData.first_name) newErrors.first_name = "First Name is required";
        if (!formData.mobile || !validateMobile(formData.mobile))
            newErrors.mobile = "Invalid number(10 digits,starts with 6-9)";
        if (!formData.gender) newErrors.gender = "Gender is required";
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
        let datatosend = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
            mobile: formData.mobile,
            gender: formData.gender,
            country_code: formData.country_code,
            type: formData.type,
            cover: formData.cover,
            status: formData.status,
        };
        try {
            const response = await register(datatosend);
            console.log(response);
            navigate("/login");
            toast.success(response.message);
        } catch (error) {
            console.error("Registration error:", error);
            toast.error(error.message || "An error occurred during registration");
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-16 py-12">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-4">
                <h2 className="text-2xl font-bold text-gray-700 text-center">
                    Sign Up
                </h2>
                <p className="text-center text-gray-500">
                    Create an account to get started
                </p>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Champa"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.first_name && (
                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Lal Suthar"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.last_name && (
                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="mobile"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mobile No.
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="9867895678"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm">{errors.mobile}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Gender
                        </label>
                        <select
                            name="gender"
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-sm">{errors.gender}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Type
                        </label>
                        <select
                            name="type"
                            id="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        >
                            <option value="User">User</option>
                            <option value="Moderator">Moderator</option>
                            <option value="Admin">Admin</option>
                        </select>
                        {errors.type && (
                            <p className="text-red-500 text-sm">{errors.type}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {isPasswordVisible ? (
                                    <IoMdEyeOff size={20} />
                                ) : (
                                    <IoMdEye size={20} />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/login ")}
                            className="text-blue-600 font-semibold underline"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

