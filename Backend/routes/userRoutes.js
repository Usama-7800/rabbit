const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Clean default import
const { protected } = require("../middleware/authmiddleware");
const router = express.Router();

//@route POST  /api/user/register
//@description  Register new user 
//@access Public
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User({ name, email, password });

        await user.save();

        // res.status(201).json({
        //     user: {
        //         _id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         role: user.role,
        //     }
        // });


        // create JWt payload 
        const payload = { _id: user._id, role: user.role, }

        // sign and return token along withuser data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (error, token) => {
            if (error) throw error;
            // send the user and token in response 
            res.status(201).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            }
            )
        })

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});
//@route POST  /api/user/login
//@description  Login user and return JWT token
//@access Public
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // find user by email
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials" });
        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const payload = { _id: user._id, role: user.role, }

        // sign and return token along withuser data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (error, token) => {
            if (error) throw error;
            // send the user and token in response 
            res.json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            }
            )
        })


    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

//@route GET  /api/user/profile
//@description  Get logined user profile
//@access private

router.get("/profile", protected, async (req, res) => {
    res.json(req.user);

})

module.exports = router;