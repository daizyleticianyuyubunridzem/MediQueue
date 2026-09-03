const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    specialty: {
        type: String,
        required: true, 
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    availableDays: {
        type : [String],
        default: ['Mon','Tue', 'Wed']
    },

    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true

});

module.exports=mongoose.model('Doctor', doctorSchema);