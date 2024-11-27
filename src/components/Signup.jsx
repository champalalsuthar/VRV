import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Signup = () => {
    const [userData, setUserData] = useState({
        first_name: "cls ",
        last_name: "suthar",
        email: "cls@gmail.com",
        password: "Cls@123",
        gender: "Male", // Default gender
        mobile: "8989898989",
        role: "User", // Role can be managed on the backend
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { first_name, last_name, email, password, gender, mobile } = userData;
            const response = await api.post("/api/register", { first_name, last_name, email, password, gender, mobile });
            alert("Signup successful! Please log in.");
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data.errors) {
                // Show validation errors returned by the backend
                const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
                alert(`Signup failed: ${errorMessages}`);
            } else {
                alert("Signup failed. Please try again.");
            }
            console.error("Signup failed", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={userData.first_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={userData.last_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={userData.mobile}
                    onChange={handleChange}
                    required
                />
                <select name="gender" value={userData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
