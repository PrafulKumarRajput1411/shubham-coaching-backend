//imported the models
const ContactUs = require("../model/contact_us")
const availableClass = require("../model/availableClass");
const BoardSchema = require("../model/educationBoard");
const Days = require("../model/days");
const TimeSlot = require('../model/demo-seesion-time-slot')
const BookDemoSession = require('../model/bookDemoSession')
const User = require('../model/userList')


const jwt = require('jsonwebtoken');
const uuidGenerator = require("../utils/uuidGenerator");
const bcrypt = require('bcrypt');
const { bookDemoSessionUser } = require("../utils/emailTemplate/book-demo-session-user-template");
const sendEmail = require("../utils/nodemailer");
const gotDemoTemplate = require("../utils/emailTemplate/got-book-demo.template");
const validateSaveAvailableTimeSlotPayload = require('../utils/payload_Validator/save-available-time-slot-payload');
const validateBookDemoSessionPayload = require("../utils/payload_Validator/book-demo-session-payload");
const getUserData = async (req, res) => {
    const data = await ContactUs.find();
    res.status(200).json({ status: true, data: data })
}
const saveContactUsData = async (req, res) => {

}
const generateUnqiueId = async (req, res) => {

}
const saveClass = async (req, res) => {
    try {
        let dataObj = []
        req.body.forEach((element, index) => {
            let uuid = uuidGenerator();
            dataObj.push({
                class_uuid: uuid,
                class_value: element.class_value,
                class_title: element.class_title,
                class_status: element.class_status
            })
        })
        await availableClass.create(dataObj).then(() => {
            res.status(200).json({ status: true, message: 'Class Added Successfully' })
        }).catch((err) => {
            res.status(200).json({ status: true, message: "Unable to save the Class" })
        })
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' })
    }
}
const updateClass = async (req, res) => {
    try {
        let uuid = req.body.class_uuid;
        let class_value = req.body.class_value;
        let class_title = req.body.class_title;
        let class_status = req.body.class_status;

        let dataObj = {
            class_uuid: uuid,
            class_value: class_value,
            class_title: class_title,
            class_status: class_status
        }

        await availableClass.updateOne({ class_uuid: uuid }, { $set: dataObj }).then(() => {
            res.status(200).json({ status: true, message: "Class Data Updated Successfully" })
        }).catch((err) => {
            res.status(200).json({ status: false, message: "Unable to update the data" })
        })


    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' })
    }
}
const getClassList = async (req, res) => {
    try {
        let classList = await availableClass.find();
        if (classList.length > 0) {
            res.status(200).json({ status: true, message: 'Success', data: classList })
        } else {
            res.status(200).json({ status: false, message: "No data Found", data: [] })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : "Something Went Wrong!" })
    }
}
const saveBoard = async (req, res) => {
    try {
        let dataObj = [];
        console.log(req.body)
        req.body.forEach((element) => {
            let uuid = uuidGenerator();
            dataObj.push({
                board_uuid: uuid,
                board_title: element.board_title,
                board_status: element.board_status
            })

        })
        await BoardSchema.create(dataObj).then(() => {
            res.status(200).json({ status: true, message: "Data Saved Successfully" });
        }).catch((error) => {
            res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' })
        })
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' });
    }
}
const getBoardList = async (req, res) => {
    try {
        let boardList = await BoardSchema.find();
        if (boardList.length > 0) {
            res.status(200).json({ status: true, message: "Success", data: boardList })
        } else {
            res.status(200).json({ status: false, message: 'No Data Foudn', data: [] })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' })
    }
}
const saveAvailableDays = async (req, res) => {
    // try {
    let dataObj = []
    console.log(req.body)
    req.body.forEach((element) => {
        let uuid = uuidGenerator();
        dataObj.push({
            days_uuid: uuid,
            days_value: element.days_value,
            day_status: element.day_status
        })
    })
    await Days.create(dataObj).then(() => {
        res.status(200).json({ status: true, message: "Data Saved Successfully" })
    }).catch((error) => {
        res.status(500).json({ status: false, message: error ? error : 'Something went Wrong' })
    })
    // } catch (error) {
    //     res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' })
    // }
}
const getAvailableDaysList = async (req, res) => {
    try {
        let dataObj = await Days.find();
        if (dataObj.length > 0) {
            res.status(200).json({ status: true, message: "Success", data: dataObj })
        } else {
            res.status(200).json({ status: true, message: "No data Found", data: [] })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : "Something Went Wrong!" })
    }
}

const saveAvailableTimeSlot = async (req, res) => {
    try {
        let validationError = []
        for (let item of req.body) {
            const { error, value } = validateSaveAvailableTimeSlotPayload(item)
            // console.log(error)
            console.log(value)
            if (error) {
                validationError.push(error)
            }
        }
        if (validationError.length > 0) {
            debugger
            res.status(400).json({ status: false, message: validationError })
            return;
        }
        dataToUpdate = req.body.filter((data => data.time_slot_uuid != ''))
        dataToSave = req.body.filter((data => data.time_slot_uuid == ''))
        if (dataToUpdate.length > 0) {
            for (let element of dataToUpdate) {
                let obj = {
                    time_slot_uuid: element.time_slot_uuid,
                    start_time_hour: element.start_time_hour,
                    start_time_min: element.start_time_min,
                    is_start_AM: element.is_start_AM,
                    end_time_hour: element.end_time_hour,
                    end_time_min: element.end_time_min,
                    is_end_AM: element.is_end_AM,
                    available_day_uuid: element.available_day_uuid
                }
                let filter = { time_slot_uuid: obj.time_slot_uuid }
                await TimeSlot.updateOne(filter, { $set: obj })
            }
        }
        if (dataToSave.length > 0) {
            for (let element of dataToSave) {
                let uuid = uuidGenerator();
                let obj = {
                    time_slot_uuid: uuid,
                    start_time_hour: element.start_time_hour,
                    start_time_min: element.start_time_min,
                    is_start_AM: element.is_start_AM,
                    end_time_hour: element.end_time_hour,
                    end_time_min: element.end_time_min,
                    is_end_AM: element.is_end_AM,
                    available_day_uuid: element.available_day_uuid
                }
                await TimeSlot.create(obj)
            }
        }

        res.status(200).json({ status: "updated" })
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : "Something Went Wrong!" })
    }
}
const getListOfAvailableTimeSlot = async (req, res) => {
    // console.log(req.query)
    try {
        let dataObj = await TimeSlot.find();
        if (dataObj.length > 0) {
            res.status(200).json({ status: true, message: "Success", data: dataObj })
        } else {
            res.status(200).json({ status: true, message: "No data Found", data: [] })
        }
    } catch (error) {
        res.status(200).json({ status: false, message: "Please Reach for Support!" })
    }
}
const saveBookDemoSession = async (req, res) => {
    try {
        const { error, value } = validateBookDemoSessionPayload(req.body);
        if (error) {
            res.status(400).json({ status: false, message: error })
            return;
        }
        let uuid = uuidGenerator();
        let obj = {
            demo_booking_uuid: uuid,
            student_name: req.body.student_name,
            student_email: req.body.student_email,
            student_phone: req.body.student_phone,
            student_class: req.body.student_class,
            student_board: req.body.student_board,
            subject_type: req.body.subject_type,
            demo_date: req.body.demo_date,
            demo_time_slot: req.body.demo_time_slot,
            demo_query: req.body.demo_query,
            demo_status: false
        }
        await BookDemoSession.create(obj)
        let html = bookDemoSessionUser(obj);
        let html2 = gotDemoTemplate(obj);
        await sendEmail(process.env.EMAIL, 'Booking of Demo Session', html2)
        await sendEmail(obj.student_email, 'Your Demo Session is Booked', html)
        res.status(200).json({ status: true, message: "Session Booked Successfully" })
    } catch (error) {
        res.status(200).json({ status: false, message: "Please Reach out for Support!" });
    }
}
const getListOfDemoSesson = async (req, res) => {
    try {
        let dataObj = await BookDemoSession.find();
        if (dataObj.length > 0) {
            res.status(200).json({ status: true, message: "Success", data: dataObj })
        } else {
            res.status(200).json({ status: true, message: "No data found", data: [] })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : "Something Went Wrong!" })
    }
}
const login = async (req, res) => {
    try {
        let id = req.body.id;
        let password = req.body.password;
        let dataObj = await User.findOne({ $or: [{ user_name: id }, { user_email: id }] });
        if (!dataObj) {
            res.status(200).json({ status: false, message: "No User Found!" });
            return;
        }

        const isPasswordCorrect = bcrypt.compare(password, dataObj.user_password);
        isPasswordCorrect.then((response) => {
            if (response) {
                let obj = {
                    email: dataObj.user_email,
                    uuid: dataObj.user_uuid,
                    user_type: dataObj.user_type
                }
                const token = jwt.sign(obj, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true })
                res.send({ status: true, message: "Success", JJ_lt_tok: token, data: dataObj })
                return
            } else {
                return res.status(200).json({ status: false, message: "Password is Incorrect!" });
            }
        }).catch((err) => {
            console.log(err)
            return res.status(500).json({ status: false, message: "Interval Server Error", error: err })
        })
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : 'Something Went Wrong!' });
    }
}
const signUp = async (req, res) => {
    try {
        let userName = req.body.userName;
        let userEmail = req.body.userEmail;
        let userPassword = req.body.userPassword;
        let userType = req.body.userType;
        let uuid = uuidGenerator();
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        //checking this email or username is already registered or not
        let findingUserName = await User.findOne({ user_name: userName });
        if (findingUserName) {
            res.status(200).json({ status: false, message: "Username is already exists!" })
            return
        }
        let findingUserEmail = await User.findOne({ user_email: userEmail });
        if (findingUserEmail) {
            res.status(200).json({ status: false, message: "User Email is already Exists!" })
            return;
        }
        let obj = {
            user_uuid: uuid,
            user_name: userName,
            user_email: userEmail,
            user_password: hashedPassword,
            user_type: userType
        }
        await User.create(obj);
        res.status(200).json({ status: true, message: "User Created Successfully" })
    } catch (error) {
        res.status(500).json({ status: false, message: error ? error : "Something Went Wrong!" });
    }
}
const testing = async (req, res) => {
    setTimeout(() => {
        return res.status(200).json({ status: true, message: "Working" })
    }, 2000)
}
module.exports = {
    getUserData,
    generateUnqiueId,
    saveContactUsData,
    saveClass,
    updateClass,
    getClassList,
    saveBoard,
    getBoardList,
    saveAvailableDays,
    getAvailableDaysList,
    saveAvailableTimeSlot,
    getListOfAvailableTimeSlot,
    saveBookDemoSession,
    getListOfDemoSesson,
    login,
    signUp,
    testing
}