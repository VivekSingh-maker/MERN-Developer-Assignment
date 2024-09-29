// 5.Express.js + MongoDB: Create an Express.js route to fetch a user 
// by their email from the MongoDB database.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\5.Express.jsAndMongoDB\server.js
const express = require("express");
const User = require('./models/user');

require("./database");
const app = express();

app.get('/user/:email', async (req, res) => {
    const email = req.params.email;

    try {
        const user = await User.findOne({ email: email });

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