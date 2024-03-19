// import the controllers
const homeControllers = require('../controllers/homeControllers')
const sendMailController = require("../controllers/sendEmail");
const express = require('express')

const router = express.Router();
router.get("/getData", homeControllers.getUserData)
router.get('/getUniqueId', homeControllers.generateUnqiueId)
router.post('/sendEmail', sendMailController.sendContactUsEmail)
router.post('/saveContactUs', homeControllers.saveContactUsData)
// export default router;
module.exports = router