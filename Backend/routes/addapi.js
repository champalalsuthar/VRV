const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const router = express.Router();
const { body, validationResult } = require("express-validator");

// Login Route
router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { email, password } = req.body;
        const emailToSearch = email.toLowerCase();
        try {
            let existingUser = await User.findOne({ email: emailToSearch });

            if (!existingUser) {
                return res
                    .status(400)
                    .send({ success: false, error: "Invalid email or password" });
            }

            if (existingUser.status !== "active") {
                return res.status(400).send({ success: false, error: "Invalid User" });
            }

            const passComp = await bcrypt.compare(password, existingUser.password);
            if (!passComp) {
                return res
                    .status(400)
                    .send({ success: false, error: "Invalid email or password" });
            }

            const data = {
                user: {
                    id: existingUser._id,
                },
            };

            const authToken = jwt.sign(data, process.env.JWT_SECRET);
            res.send({ success: true, authToken, userid: existingUser._id, user: existingUser });
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }
);

// Register Route
router.post(
    "/register",
    [
        body("first_name", "First name must be at least 2 characters long").isLength({
            min: 2,
        }),
        body("last_name", "Last name must be at least 2 characters long").isLength({
            min: 2,
        }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be at least 6 characters long").isLength({
            min: 6,
        }),
        body("mobile", "Mobile number must be 10 digits").isLength({ min: 10, max: 10 }),
        body("gender", "Gender must be either 'Male', 'Female', or 'Other'").isIn([
            "Male",
            "Female",
            "Other",
        ]),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { first_name, last_name, email, password, gender, mobile } = req.body;

        try {
            let existingUser = await User.findOne({ email: email });

            if (existingUser) {
                return res
                    .status(400)
                    .json({ success: false, error: "User with this email already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                first_name,
                last_name,
                email,
                password: hashedPassword,
                gender,
                mobile,
                type: "user",
                status: "active",
                created_at: new Date().toISOString(),
            });

            await newUser.save();

            res.send({ success: true, message: "User registered successfully" });
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }
);


module.exports = router;