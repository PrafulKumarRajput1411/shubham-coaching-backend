const mongoose = require('mongoose');
const daysSchema = new mongoose.Schema({
    days_uuid: {
        type: String
    },
    days_value: {
        type: String
    },
    day_status: {
        type: Boolean
    }

})

const Days = mongoose.model('available_day', daysSchema);
module.exports = Days