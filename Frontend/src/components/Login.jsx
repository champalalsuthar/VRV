import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import api from "../utils/api";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin } from "../API/userLogin";

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
        email: "",
        password: "",
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
    };

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
        let datatosend = {
            email: formData.email,
            password: formData.password,
        };
        try {
            const response = await userLogin(datatosend);
            console.log(response);
            // toast.success(response.message);
            if (response.success) {
                toast.success(  "Login Successfully")
                navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error.message || "An error occurred during Login");
        }
        // try {
        //     const response = await api.post("/api/login", { email: formData.email, password: formData.password });
        //     console.log(response)
        //     console.log(response.data)
        //     dispatch(login({ token: response.data.authToken, role: response.data.user.type, user: response.data.user, id: response.data.user._id })); // Assuming backend provides token and role
        //     navigate("/dashboard");
        //     toast.success('Login Successfully');
        // } catch (error) {
        //     console.error("Login failed", error);
        // }
    };

    return (

        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-16 py-12">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-4">
                <h2 className="text-2xl font-bold text-gray-700 text-center">
                    Welcome Back!
                </h2>
                <p className="text-center text-gray-500">
                    Sign in to access your account
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
                        Don’t have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/signup")}
                            className="text-blue-600 font-semibold underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

