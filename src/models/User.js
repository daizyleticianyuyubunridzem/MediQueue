const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        unique: true,
        trim: true
    },

    userPasswordHash: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['staff', 'admin'],
        default: 'staff'
    }


});

module.exports = mongoose.model('Users', userSchema);
