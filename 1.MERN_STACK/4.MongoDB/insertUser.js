// 4.MongoDB: Create a MongoDB schema for storing user data (name, email, age), 
// and write a script to insert a new user into the collection.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\4.MongoDB\insertUser.js
const mongoose = require('mongoose');
const User = require('./userModel');

mongoose.connect('mongodb://127.0.0.1:27017/usersDB')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const insertUser = async () => {
  try {
    const newUser = new User({
      name: 'Swati Saini',
      email: 'swati.saini@example.com',
      age: 26
    });

    const savedUser = await newUser.save();
    console.log('User inserted:', savedUser);
  } catch (error) {
    console.error('Error inserting user:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertUser();
