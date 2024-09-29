// 7.React Routing: Set up React Router in an application to navigate 
// between a Home page and a Users page.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\7.React_Routing\server\server.js
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

app.get('/getallusers', async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});