// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\8.RESTful_API_Design\database\index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});