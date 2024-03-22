// import the controllers
const homeControllers = require('../controllers/homeControllers')
const sendMailController = require("../controllers/sendEmail");
const express = require('express')

const router = express.Router();
router.get("/getData", homeControllers.getUserData)
router.get('/getUniqueId', homeControllers.generateUnqiueId)
router.post('/sendEmail', sendMailController.sendContactUsEmail)
router.post('/saveContactUs', homeControllers.saveContactUsData)


// book demo session api
router.post('/saveClass', homeControllers.saveClass)
router.patch('/updateClass', homeControllers.updateClass),
    router.get('/getClassList', homeControllers.getClassList)
router.post('/saveBoardList', homeControllers.saveBoard)
router.get('/getBoardList', homeControllers.getBoardList)
router.post('/save-available-days', homeControllers.saveAvailableDays)
router.get('/get-available-days', homeControllers.getAvailableDaysList)
router.post('/save-available-time-slot', homeControllers.saveAvailableTimeSlot)
router.get('/get-list-of-avaialbe-time-slot', homeControllers.getListOfAvailableTimeSlot)
router.post('/book-demo-session', homeControllers.saveBookDemoSession)
// export default router;
module.exports = router