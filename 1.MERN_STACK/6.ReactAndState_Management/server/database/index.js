// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\6.ReactAndState_Management\server\database\index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usersDB')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});