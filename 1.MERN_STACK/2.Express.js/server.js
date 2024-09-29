// 2.Express.js: Create a simple REST API using Express.js with a single route 
// '/users' that returns a JSON list of users.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\2.Express.js\server.js
const express = require('express');
const app = express();
const users = require("./listOfUsers");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
  
app.use(cors(corsOptions));

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});