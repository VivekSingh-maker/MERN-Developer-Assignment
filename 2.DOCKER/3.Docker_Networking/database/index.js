// 2.DOCKER\3.Docker_Networking\database\index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDB')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});