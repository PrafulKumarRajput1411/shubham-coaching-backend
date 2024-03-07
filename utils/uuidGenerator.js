const { v4: uuidv4 } = require('uuid');
const uuidGenerator = () => {
    const uniqueId = uuidv4();
    return uniqueId
}
module.exports = uuidGenerator