const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    board_uuid: {
        type: String
    },
    board_title: {
        type: String
    },
    board_status: {
        type: Boolean
    }
})
const BoardSchema = mongoose.model('available_board', boardSchema);
module.exports = BoardSchema