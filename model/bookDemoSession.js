const mongoose = require('mongoose');
const BookDemoSchema = new mongoose.Schema({
    demo_booking_uuid: {
        type: String
    },
    student_name: {
        type: String
    },
    student_email: {
        type: String
    },
    student_phone: {
        type: String
    },
    student_class: {
        type: String
    },
    student_board: {
        type: String
    },
    subject_type: {
        type: String
    },
    demo_date: {
        type: String
    },
    demo_time_slot: {
        type: String
    },
    demo_query: {
        type: String
    },
    demo_status: {
        type: Boolean
    }
})
const BookDemoSession = mongoose.model('book-demo-session-list', BookDemoSchema);
module.exports = BookDemoSession