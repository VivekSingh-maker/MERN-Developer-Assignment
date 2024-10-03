// 2.DOCKER\3.Docker_Networking\models\user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;