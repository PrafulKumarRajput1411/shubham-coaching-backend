const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    class_uuid: {
        type: String
    },
    class_value: {
        type: String
    },
    class_title: {
        type: String
    },
    class_status: {
        type: Boolean
    }
})
const availableClass = mongoose.model('available-class', classSchema);
module.exports = availableClass