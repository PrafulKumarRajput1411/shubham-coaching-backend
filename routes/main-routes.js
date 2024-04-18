// import the controllers
const homeControllers = require('../controllers/homeControllers')
const sendMailController = require("../controllers/sendEmail");
const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
router.get("/getData", homeControllers.getUserData)
router.get('/getUniqueId', homeControllers.generateUnqiueId)
router.post('/sendEmail', sendMailController.sendContactUsEmail)
router.post('/saveContactUs', homeControllers.saveContactUsData)


// book demo session api
router.post('/saveClass', homeControllers.saveClass)
router.patch('/updateClass', homeControllers.updateClass),
    router.get('/getClassList', auth.basicAuthentication, homeControllers.getClassList)
router.post('/saveBoardList', homeControllers.saveBoard)
router.get('/getBoardList', auth.basicAuthentication, homeControllers.getBoardList)
router.post('/save-available-days', homeControllers.saveAvailableDays)
router.get('/get-available-days', auth.basicAuthentication, homeControllers.getAvailableDaysList)
router.post('/save-available-time-slot', homeControllers.saveAvailableTimeSlot)
router.get('/get-list-of-avaialbe-time-slot', auth.basicAuthentication, homeControllers.getListOfAvailableTimeSlot)
router.post('/book-demo-session', homeControllers.saveBookDemoSession)
router.get('/get-book-demo-list', homeControllers.getListOfDemoSesson)
router.post('/login', homeControllers.login)
router.post('/signUp', homeControllers.signUp)
router.get('/testing', auth.loginAuthentication, homeControllers.testing)
// export default router;
module.exports = router