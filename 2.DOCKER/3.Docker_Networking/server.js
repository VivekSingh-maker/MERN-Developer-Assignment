// 2.DOCKER\3.Docker_Networking\server.js
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