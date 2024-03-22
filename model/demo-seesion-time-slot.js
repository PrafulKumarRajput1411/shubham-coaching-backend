const mongoose = require('mongoose');
const timeSlot = new mongoose.Schema({
    time_slot_uuid: {
        type: String
    },
    start_time_hour: {
        type: String
    },
    start_time_min: {
        type: String
    },
    is_start_AM: {
        type: Boolean
    },
    end_time_hour: {
        type: String
    },
    end_time_min: {
        type: String
    },
    is_end_AM: {
        type: Boolean
    },
    available_day_uuid: {
        type: String
    }
})


const TimeSlot = mongoose.model('available_time_slot', timeSlot);
module.exports = TimeSlot