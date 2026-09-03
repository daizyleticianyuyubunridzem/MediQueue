const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema ({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },

    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },

    appointmentDate: {
        type: String,
        required: true,

    },

    appointmentTime: {
        type: String,
        required: true,
    },

    reason: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
        default: 'Pending'
    }

},{
    timeStamps: true
});


module.exports = mongoose.model('Appointment', appointmentSchema);
