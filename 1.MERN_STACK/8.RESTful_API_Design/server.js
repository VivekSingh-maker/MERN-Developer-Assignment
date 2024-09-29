// 8.RESTful API Design: Design and implement a REST API in Express.js
// for a simple blog application with routes for creating, reading, 
// updating, and deleting blog posts.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\8.RESTful_API_Design\server.js
const express = require("express");
const cors = require("cors");
const blogRoute  = require("./router/blog-router");


require("./database");
const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
  
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/blog", blogRoute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});