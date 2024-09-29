// 6.React + State Management: Build a form component in React that 
// allows users to submit their name, email, and age. 
// On submission, send the data to the backend API and 
// update the state to display the new user.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\6.ReactAndState_Management\server\server.js
const express = require("express");
const User = require('./models/user');
const cors = require("cors");

const app = express();
require("./database");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/users', async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const newUser = new User({ name, email, age });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});