const mongoose = require('mongoose');

const patientSchema = mongoose.Schema ({
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    dateOfBirth: {
        type: Date,
        required: true,
    },

    gender: {
        type: String,
        required: true,
        enum:['Female', 'Male', 'Other']
    },
    
    phone: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        trim: true,
        lowercase: true
    },

    address: {
        type: String,
        trim: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Patient', patientSchema);
