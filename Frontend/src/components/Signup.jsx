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
        type: "user",
        cover: "",
        status: "active",
    });
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);



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
        try {
            const response = await api.post("/api/register", {
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
            });
            console.log(response)
            console.log(response.data)
            if (response.data.success) {
                navigate("/login");
            }
            console.log(response.data.message)

        } catch (error) {
            console.error("signup failed", error);
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




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "../redux/slices/authSlice";
// import api from "../utils/api";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";

// const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// };

// const validatePassword = (password) => {
//     const regex =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
//     return regex.test(password);
// };

// const validateMobile = (mobile) => {
//     const regex = /^[6-9]\d{9}$/; // Mobile number should start with 6-9 and be 10 digits
//     return regex.test(mobile);
// };


// const Signup = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: "",
//         mobile: "",
//         gender: "male",
//         country_code: "+91",
//         type: "user",
//         cover: "",
//         status: "active",
//     });
//     const [errors, setErrors] = useState({});
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));

//         // Validate only the specific field
//         const error = validateField(name, value); // validate the changed field
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             [name]: error, // Set only the error for the changed field
//         }));
//     };
//     // Update the validation function to validate only the changed field
//     const validateField = (name, value) => {
//         switch (name) {
//             case "first_name":
//                 return value ? "" : "First Name is required";
//             case "email":
//                 return validateEmail(value) ? "" : "Invalid email address";
//             case "password":
//                 return validatePassword(value)
//                     ? ""
//                     : "8-16 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
//             case "mobile":
//                 return validateMobile(value)
//                     ? ""
//                     : "Invalid number (10 digits, starts with 6-9)";
//             case "gender":
//                 return value ? "" : "Gender is required";
//             default:
//                 return "";
//         }
//     };

//     // Validate form based on the field being changed
//     const validateForm = () => {
//         let newErrors = {};
//         if (!formData.first_name) newErrors.first_name = "First Name is required";
//         if (!formData.mobile || !validateMobile(formData.mobile))
//             newErrors.mobile = "Invalid number(10 digits,starts with 6-9)";
//         if (!formData.gender) newErrors.gender = "Gender is required";
//         if (!formData.email || !validateEmail(formData.email))
//             newErrors.email = "Invalid email address";
//         if (!formData.password || !validatePassword(formData.password))
//             newErrors.password =
//                 "8-16 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";

//         setErrors(newErrors);
//         return newErrors;
//     };
//     const handleSubmit = async (e) => {
//         console.log("handleSubmit");

//         e.preventDefault();
//         setIsFormSubmitted(true);
//         const validationErrors = validateForm(); // Validate the form

//         // If there are errors, do not submit the form
//         if (Object.keys(validationErrors).length > 0) {
//             return;
//         }
//         try {
//             const response = await api.post("/api/register", {
//                 first_name: formData.first_name,
//                 last_name: formData.last_name,
//                 email: formData.email,
//                 password: formData.password,
//                 mobile: formData.mobile,
//                 gender: formData.gender,
//                 country_code: formData.country_code,
//                 type: formData.type,
//                 cover: formData.cover,
//                 status: formData.status,
//             });
//             console.log(response)
//             console.log(response.data)
//             if (response.data.success) {
//                 navigate("/login");
//             }
//             console.log(response.data.message)

//         } catch (error) {
//             console.error("signup failed", error);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center bg-gray-50 mt-16">
//             <div className=" bg-red-100 h-[85vh] flex flex-col w-full  rounded-md">
//                 <form
//                     noValidate
//                     onSubmit={handleSubmit}
//                     className="flex flex-wrap items-center"
//                 >
//                     <div className="w-full sm:w-1/2 relative flex justify-center items-center mb-8 sm:mb-0 h-[85vh] overflow-hidden">
//                         <img
//                             src="/login.jpeg"
//                             alt="login image"
//                             className="w-full h-full object-cover opacity-70 transition duration-300 ease-in-out"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 sm:p-8 space-y-4">
//                             <p className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 ">
//                                 <span className="inline-block mr-2 text-3xl ">✈️</span>
//                                 Sign up/Login now to
//                             </p>
//                             {/* <p className="text-xl sm:text-2xl font-semibold text-white">
//                                 <span className="inline-block mr-2 text-3xl">🔒</span>
//                                 Lock Flight Prices & Pay Later
//                             </p>
//                             <p className="text-xl sm:text-2xl font-semibold text-white">
//                                 <span className="inline-block mr-2 text-3xl">🏨</span>
//                                 Book Hotels @ ₹0
//                             </p>
//                             <p className="text-xl sm:text-2xl font-semibold text-white">
//                                 <span className="inline-block mr-2 text-3xl">💸</span>
//                                 Get 3X refund, if your waitlisted train doesn’t get confirmed
//                             </p> */}

//                             {/* CTA Button (optional, add if needed) */}
//                             <button
//                                 type="button"
//                                 onClick={() => navigate("/")}
//                                 className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
//                             >
//                                 Start Now
//                             </button>
//                         </div>
//                     </div>

//                     <div className="w-full sm:w-1/2 flex flex-col items-center">
//                         <div className="mb-4 text-center">
//                             <h1 className="my-3 text-4xl font-bold">
//                                 Sign Up
//                             </h1>
//                             <p className="text-sm dark:text-gray-600">
//                                 Create an account to get started
//                             </p>
//                         </div>
//                         <div className="space-y-4 w-full">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                 <div className="w-[90%] mx-auto">
//                                     <label htmlFor="first_name" className="block mb-1 text-sm">
//                                         First Name
//                                         <span className="text-red-600 text-sm ml-1">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="first_name"
//                                         id="first_name"
//                                         placeholder="John"
//                                         value={formData.first_name}
//                                         onChange={handleChange}
//                                         className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                     />
//                                     {errors.first_name && (
//                                         <p className="text-red-600 text-xs">{errors.first_name}</p>
//                                     )}
//                                 </div>
//                                 {/* Last Name */}
//                                 <div className="w-[90%] mx-auto">
//                                     <label htmlFor="last_name" className="block mb-1 text-sm">
//                                         Last Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="last_name"
//                                         id="last_name"
//                                         placeholder="Doe"
//                                         value={formData.last_name}
//                                         onChange={handleChange}
//                                         className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                     />
//                                 </div>

//                                 {/* Mobile Number */}
//                                 <div className="w-[90%] mx-auto ">
//                                     <label htmlFor="mobile" className="block mb-1 text-sm">
//                                         Mobile Number
//                                         <span className="text-red-600 text-sm ml-1">*</span>
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="mobile"
//                                         id="mobile"
//                                         placeholder="9845678934"
//                                         value={formData.mobile}
//                                         onChange={handleChange}
//                                         className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                     />
//                                     {errors.mobile && (
//                                         <p className="text-red-600 text-xs">{errors.mobile}</p>
//                                     )}
//                                 </div>

//                                 {/* Gender */}
//                                 <div className="w-[90%] mx-auto">
//                                     <label htmlFor="gender" className="block mb-1 text-sm">
//                                         Gender
//                                         <span className="text-red-600 text-sm ml-1">*</span>
//                                     </label>
//                                     <select
//                                         name="gender"
//                                         id="gender"
//                                         value={formData.gender}
//                                         onChange={handleChange}
//                                         className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                     >
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                     {errors.gender && (
//                                         <p className="text-red-600 text-xs">{errors.gender}</p>
//                                     )}
//                                 </div>
//                                 <div className="w-[90%] mx-auto">
//                                     <label htmlFor="email" className="block mb-1 text-sm">
//                                         Email address
//                                         <span className="text-red-600 text-sm ml-1">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         placeholder="leroy@jenkins.com"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="w-full px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                     />
//                                     {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
//                                 </div>
//                                 {/* Password */}
//                                 <div className="w-[90%] mx-auto">
//                                     <div className="flex justify-between mb-1">
//                                         <label htmlFor="password" className="text-sm">
//                                             Password
//                                             <span className="text-red-600 text-sm ml-1">*</span>
//                                         </label>
//                                     </div>
//                                     <div className="relative">
//                                         <input
//                                             type={isPasswordVisible ? "text" : "password"}
//                                             name="password"
//                                             id="password"
//                                             placeholder="**********"
//                                             value={formData.password}
//                                             onChange={handleChange}
//                                             className="w-full mx-auto px-3 py-2 outline-none border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                                         >
//                                             {isPasswordVisible ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
//                                         </button>
//                                     </div>
//                                     {errors.password && (
//                                         <p className="text-red-600 text-xs">{errors.password}</p>
//                                     )}
//                                 </div>
//                                 {/* <div className="w-2/3 mx-auto text-center mt-4">
//                                 <p className="text-sm text-right text-gray-600">
//                                     <button
//                                         type="button"
//                                         onClick={() => setForgotPassword(true)}
//                                         className="underline text-blue-600"
//                                     >
//                                         Forgot Password
//                                     </button>
//                                 </p>
//                             </div> */}
//                             </div>
//                         </div>
//                         {/* Submit Button */}
//                         <div className="space-y-2 w-1/4 mt-4">
//                             <button
//                                 type="submit"
//                                 className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
//                             >
//                                 Sign Up
//                             </button>
//                         </div>

//                         <div className="space-y-2 w-full text-center mt-4">
//                             <p className="text-sm text-center text-gray-600">

//                                 Already have an account?
//                                 <button
//                                     type="button"
//                                     onClick={() => {
//                                         navigate("/login")
//                                     }}
//                                     className="underline text-blue-600"
//                                 >
//                                     Sign in
//                                 </button>
//                             </p>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     );
// };

// export default Signup;

